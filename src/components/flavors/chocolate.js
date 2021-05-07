import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import IceCream2 from '../assets/flavorImages/icecream2.jpg';

export default function Chocolate(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant={"top"} src={IceCream2} style={{ height: '15rem' }}/>
                <Card.Body>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>$1.99</Card.Text>
                    <Button variant={"primary"} onClick={handleShow}>More</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chocolate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cost: $1.99</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}