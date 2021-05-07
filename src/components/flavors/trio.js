import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import IceCream4 from '../assets/flavorImages/icecream4.jpg';

export default function Trio(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant={"top"} src={IceCream4} style={{ height: '15rem' }}/>
                <Card.Body>
                    <Card.Title>The Trio</Card.Title>
                    <Card.Text>$3.99</Card.Text>
                    <Button variant={"primary"} onClick={handleShow}>More</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>The Trio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cost: $3.99</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}