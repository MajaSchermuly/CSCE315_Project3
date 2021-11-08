import '../../App.css'
import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import "./Home.css"


import {Card, Dropdown, ListGroup, Container, Row, Col} from 'react-bootstrap';




function Home() {

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return(
        <>
        <Container>
            <br></br>
            <Row className='center'>
                <Col> 
                    <Row>
                        <Button variant='outline-dark'>Events</Button>
                        <Button variant='outline-dark'>Food Banks</Button>

                        <Dropdown>
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                Date
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">11/8</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">11/9</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">11/10</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">11/11</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                Time
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">12:00 pm</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">12:30 pm</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">1:00 pm</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">1:30 pm</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">2:00 pm</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">2:30 pm</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Row>

                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control size="text" placeholder="Search Organization..." />
                        </Form>

                        <Dropdown>
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Vegetarian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dessert</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Gluten</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <Button variant='dark'>Search</Button>
                    </Row>
                    <br></br>

                    <Card style={{ width: '18rem' }}>
                    <Card.Header>VSA Banh Mi</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Date: November 8 2021</ListGroup.Item>
                        <ListGroup.Item>Time: 2 pm - 4 pm</ListGroup.Item>
                        <ListGroup.Item>Location: Rudder Tower</ListGroup.Item>
                        <ListGroup.Item>#Vietnamese #Gluten</ListGroup.Item>
                    </ListGroup>
                    </Card>

                    <br></br>

                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Sharetea Milk Tea</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Date: November 8 2021</ListGroup.Item>
                        <ListGroup.Item>Time: 5 pm - 6 pm</ListGroup.Item>
                        <ListGroup.Item>Location: MSC</ListGroup.Item>
                        <ListGroup.Item>#Lactose #drink</ListGroup.Item>
                    </ListGroup>
                    </Card>

                    <br></br>

                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Insomnia Cookies</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Date: November 8 2021</ListGroup.Item>
                        <ListGroup.Item>Time: 9 pm - 11 pm</ListGroup.Item>
                        <ListGroup.Item>Location: Kyle Field</ListGroup.Item>
                        <ListGroup.Item>#Vegetarian #desserts</ListGroup.Item>
                    </ListGroup>
                    </Card>

                    <br></br>


                    

                </Col>

                <Col>
                    <h3>Find me here!</h3>

                    <Image src="/images/map.png" rounded />
                </Col>
            </Row>
            
        </Container>
            
        </>
        );
}

export default Home;