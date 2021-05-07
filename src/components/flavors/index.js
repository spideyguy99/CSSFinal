import React from "react";
import {useState} from "react";
import {Jumbotron, Card, Button, Modal, Container, Row, Col} from 'react-bootstrap';

import Chocolate from "./chocolate";
import Trio from "./trio";
import Blue from "./blue";
import Vanilla from "./vanilla";

export default function Flavors(){

    return(
        <div className={"holder"}>
            <Container fluid>
                <Row fluid>
                    <Col>
                        <Jumbotron style={{display: "flex", flexWrap:"wrap", justifyContent: "space-around"}}>
                            <h1 style={{width:"100%"}}>Find your next favorite flavor</h1>
                            <Blue/>
                            <Chocolate/>
                            <Vanilla/>
                            <Trio/>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}