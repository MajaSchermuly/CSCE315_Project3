import '../../App.css'
import React from 'react'
import './Account.css'

import {Card, Form, ListGroup, Container, Row, Col, Button} from 'react-bootstrap';




function Account() {
    
    return(
        <>
        <Container>
            <br></br>
            <Row className='center'>
                <Col> 
                    <h3>Your Events</h3>
                    <Row>
                        <Button variant='outline-dark'>Past Events</Button>
                        <Button variant='outline-dark'>Current Events</Button>
                        <Button variant='outline-dark'>Future Events</Button>
                        <Button variant='outline-dark'>All Events</Button>
                    </Row>
                    <br></br>

                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Cookies on Campus</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Date: November 17 2021</ListGroup.Item>
                        <ListGroup.Item>Time: 5 pm - 6 pm</ListGroup.Item>
                        <ListGroup.Item>Location: Kyle Field</ListGroup.Item>
                        <ListGroup.Item>#Vegetarian #desserts</ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>

                <Col>
                    <h3>Add New Event</h3>

                    <Form>
                        <Form.Group className="mb-3" controlId="EventAdder.Name">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="email" placeholder="Add Event Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="email" placeholder="Add Event Date"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="email" placeholder="Add Event Time"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="email" placeholder="Add Event Location"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="EventAdder.Tags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="textarea" placeholder="Add Event Tags"/>
                        </Form.Group>

                        <Button block size="lg" type="submit" >submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            
        </Container>
            
        </>
        );
}

export default Account;