import React, { useReducer } from "react";

import img1 from './AmberPalace.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './Ticket.css'
import Table from 'react-bootstrap/Table'
import { handlePayment } from "../services/index.js";

export function Ticket(props) {

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "city": "JAIPUR",
      "monument": "Amber Palace",
      "price_adult": "25",
      "price_children": "0",
      "price_abroad": "550",
      "name": "string",
      "date": "string",
      "emailID": "string",
      "count_adult": "string",
      "count_children": "string",
      "count_abroad": "string",
      "phone": "string",
      "personal_id_no": "string",
      "doc_type": "string"
    }
  );

  const handleSubmit = async () => {
    handlePayment(formInput)
  }

  return (
    <div>
      <h1>......</h1>
      <h1>Amber Palace</h1>
      <br></br>

      <div>
        <Container>


          <img

            className="d-block w-20"
            src={img1}
            alt="First slide"
            style={{ height: '20rem', margin: '0 auto 0 auto' }}
          />


        </Container>

      </div>
      <br></br>

      <Container className="Shift">
        <Row>
          <Col className="Shift1"><div class="col-md-3 text-center box">
            <ul class="list-unstyled mb-0"  >
              <li><h1>&#8377;</h1>
                <Table bordered >
                  <thead>
                    <tr>

                      <th>Indian Nationals</th>
                      <th>Foreign Nationals</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rs. 25 for Adults</td>
                      <td rowSpan={2}>Rs 550</td>

                    </tr>
                    <tr>

                      <td>Free for Children below 15 years</td>


                    </tr>

                  </tbody>
                </Table>
              </li>
              <li><h1><div class="marker"></div></h1>
                <p>Devisinghpura, Amer, Jaipur, Rajasthan, 302001, India </p>
              </li>

              <li><h1 >	&#9742;</h1>

                <p>0141 253 0293</p>
              </li>

              <li><h1>
                &#128231;</h1>
                <p> <a href="https://jaipurtourism.co.in/amber-amer-fort-jaipur">Visit Website</a></p>

              </li>
            </ul>
          </div></Col>
          <Col >
            <div>
              <Form.Group className="mb-3">
                <Form.Label >Enter your Name</Form.Label>
                <Form.Control name="name" onChange={handleInput} placeholder="Eg: Vithika Pungliya" />

              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label >Enter your Number</Form.Label>
                <Form.Control name="phone" onChange={handleInput} placeholder="Eg: 8484822102" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label >Enter your Email</Form.Label>
                <Form.Control name="emailID" onChange={handleInput} placeholder="Eg: xyz@xyz.com" />

              </Form.Group>
              <Row>
                <Col>

                  <div className="App">
                    <div className="input-container">
                      <div>
                        <label>Book your date</label>
                        <input type="date" name="date" onChange={handleInput}></input>
                        <input type="hidden" name="csrfToken" value="1234567890abcdef" />
                        <input type="hidden" name="city" value="JAIPUR" />
                        <input type="hidden" name="monument" value="Amber Palace" />
                        <input type="hidden" name="price_adult" value="25" />
                        <input type="hidden" name="price_children" value="0" />
                        <input type="hidden" name="price_abroad" value="550" />
                      </div>

                    </div>

                  </div>
                </Col>
                <Col>Children<br></br>
                  <Select
                    labelId="demo-simple-select-label"
                    name="count_children"
                    id="demo-simple-select"
                    defaultValue={formInput.name}
                    onChange={handleInput}
                  >
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>

                  </Select></Col>
                <Col>Adults<br></br>
                  <Select
                    labelId="demo-simple-select-label"
                    name="count_adult"
                    id="demo-simple-select"
                    defaultValue={formInput.name}
                    onChange={handleInput}
                  >

                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select></Col>
                <Col>Foreigners<br></br>
                  <Select
                    labelId="demo-simple-select-label"
                    name="count_abroad"
                    id="demo-simple-select"
                    defaultValue={formInput.name}
                    onChange={handleInput}
                  >
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select></Col>




              </Row>
              <br></br>
              <Row>
                <Col> Select Verification Type
                  <br></br>
                  <Select
                    labelId="demo-simple-select-label"
                    name="doc_type"
                    id="demo-simple-select"
                    defaultValue={formInput.name}
                    onChange={handleInput}
                  >
                    <MenuItem value="Aadhar Card">Adhar Card</MenuItem>
                    <MenuItem value="Pan Card">Pan Card</MenuItem>
                    <MenuItem value="Passport">Passport</MenuItem>

                  </Select></Col>
                <Col>

                  <Form.Group className="mb-3">
                    <Form.Label >ID Number</Form.Label>
                    <Form.Control name="personal_id_no" onChange={handleInput} placeholder="" />

                  </Form.Group>

                </Col>


              </Row>


              <br></br>
              <br></br>

              <Button onClick={handleSubmit}>Book Now</Button>
              <br>
              </br>
              <br></br>




            </div>
          </Col>
        </Row>

      </Container >

      <br></br>
    </div>


  );
}

export default Ticket;