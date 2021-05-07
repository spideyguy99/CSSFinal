import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import IceCream1 from '../assets/flavorImages/icecream1.jpg';

export default function Blue(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant={"top"} src={IceCream1} style={{ height: '15rem' }}/>
                <Card.Body>
                    <Card.Title>Blue</Card.Title>
                    <Card.Text>$2.99</Card.Text>
                    <Button variant={"primary"} onClick={handleShow}>More</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Blue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cost: $2.99</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}