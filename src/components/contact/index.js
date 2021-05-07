import React from "react";
import {Container, Row, Col, Jumbotron, Form, Button} from "react-bootstrap";

export default function Contact(){
    return(
        <div className={"holder"}>
            <Container fluid>
                <Jumbotron>
                    <Row fluid>
                        <Col>
                            <h1>Contact Us</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Email / Phone Number</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    );
}