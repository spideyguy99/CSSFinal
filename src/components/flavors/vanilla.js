import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import IceCream3 from '../assets/flavorImages/icecream3.jpg';

export default function Vanilla(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant={"top"} src={IceCream3} style={{ height: '15rem' }}/>
                <Card.Body>
                    <Card.Title>Vanilla</Card.Title>
                    <Card.Text>$1.99</Card.Text>
                    <Button variant={"primary"} onClick={handleShow}>More</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Vanilla</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                       <p>Cost: $1.99</p>
                    </Modal.Body>
            </Modal>
        </div>
    );
}