import '../../App.css'
import React from 'react'
import './Account.css'

import {Card, Form, ListGroup, Container, Row, Col, Button} from 'react-bootstrap';

function Register() {
    return(
        <>
          
            <div className='center'>
            <h2>This Feature is scheduled for Sprint 2</h2>

            <Form>
                        <Form.Group className="mb-3" controlId="EventAdder.Name">
                            <Form.Label> Username:</Form.Label>
                            <Form.Control type="email" placeholder="Add Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Date">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Add email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Time">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="email" placeholder="enter password"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Location">
                            <Form.Label>Reenter password</Form.Label>
                            <Form.Control type="email" placeholder="re-enter password"/>
                        </Form.Group>

                        <Button block size="lg" type="submit" >submit
                        </Button>
                    </Form>
            </div>
        </>
        );
}

export default Register;