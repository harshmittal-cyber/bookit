import axios from 'axios'
import QRCode from 'qrcode'
import { saveAs } from 'file-saver';


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const confirmcardorder = async (formInput) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            Accept: "application/json",
        }
    }

    const { data } = await axios.post(`http://localhost:4000/api/payment/createTicket`, formInput, config);
    console.log('ticket', data)
    var opts = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 0.1,
        width: 1080,
        color: {
            dark: "#FFC97E",
            light: "#ffffff"
        }
    }
    if (data.success) {
        QRCode.toDataURL(`http://localhost:3000/verify/${data.ticket._id}`, opts).then((da) => {
            saveAs(da, `${data.ticket.monument}_ticket.png`)
        });
    }
}

export const handlePayment = async (formInput) => {
    console.log('form', formInput)
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        return;
    }
    const config = {
        headers: {
            'Content-type': 'application/json',
            Accept: "application/json",
        }
    }

    const total = parseInt(formInput.count_adult) * 50 + parseInt(formInput.count_children) * 10 + parseInt(formInput.count_abroad) * 200
    const { data } = await axios.post(`http://localhost:4000/api/payment/createpayment`, { amount: total }, config)
    if (!data) {
        return
    }

    const options = {
        key: "rzp_test_AilGDnJcMHEF0E",
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'BOOKIT',
        description: "Payment Receipt",
        handler: async function (response) {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response
            if (razorpay_order_id !== undefined && razorpay_payment_id !== undefined && razorpay_signature !== undefined) {
                confirmcardorder(formInput)
            }
        },
        prefill: {
            phone_number: 9999999999
        }
    }

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}