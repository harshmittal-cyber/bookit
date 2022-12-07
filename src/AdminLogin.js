import React, { useReducer } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useHistory } from "react-router-dom";
export function AdminLogin(props) {
  const history = useHistory();
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {

      "email": "string",
      "password": "string"
    }

  );

  const handleSubmit = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Accept: "application/json",
      }
    }

    const { data } = await axios.post(`http://localhost:4000/api/admin/login`, formInput, config);
    if (data.success) {
      console.log(data)
      localStorage.setItem('token', data.token)
      history.push('/')
    }
  }

  return (
    <div>
      <h1>.....</h1>
      <h1>Admin Login</h1>
      <div>


      </div>
      <br></br>

      <Container className="Shift">
        <Row>

          <Col >
            <div>
              <Form.Group className="mb-3">
                <Form.Label >Enter Username</Form.Label>
                <Form.Control name="email" onChange={handleInput} />

              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label >Enter Password</Form.Label>
                <Form.Control type="Password" name="password" onChange={handleInput} />
              </Form.Group>
              <Button onClick={handleSubmit}>Sign In</Button>
              <br>
              </br>
              <br></br>
            </div></Col>
        </Row>

      </Container >

      <br></br>
    </div>


  );
}



export default AdminLogin;