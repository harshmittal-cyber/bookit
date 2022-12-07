import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container'


const Verify = () => {
    const history = useHistory()
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const { id } = useParams()

    const getresult = async (id2) => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Accept: "application/json",
            }
        }
        const id1 = { id: id2 }
        const { data } = await axios.post(`http://localhost:4000/api/payment/getTicket`, id1, config);
        if (data.success) {
            setSuccess(data.success)
            setMessage(data.message)
        } else {
            setSuccess(data.success)
            setMessage(data.message)

        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token == null) {
            history.push('/admin')
        } else {
            getresult(id)
        }
    }, [])
    return (
        <>
            <div>
                <div style={{ marginBottom: '43px' }}>
                    <h1>.....</h1>
                    <h1>Ticket Status</h1>

                    <Container className="Shift">

                        <br></br>

                        {
                            success ? 'Verified' : 'Not verified'
                        }
                        <div>
                            {message}
                        </div>
                    </Container>
                </div>

            </div>
        </>
    )
}

export default Verify