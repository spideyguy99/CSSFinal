import React from "react";
import {Container, Image, Row, Col, Carousel, Jumbotron} from "react-bootstrap";

import homeImg1 from '../assets/homeImage1.jpg';
import homeImg2 from '../assets/hoemImage2.jpg';

export default function Home(){
    return(
        <div className={"holder"}>
            <Container fluid>

                <Jumbotron>
                <Row fluid>
                    <Col>
                        <h1>Super Duper Ice Cream Shop</h1>
                        <p>Where ice cream is super!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <Image src={homeImg1} rounded style={{height:"350px", width:"100%", objectFit:"cover"}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={homeImg2} rounded style={{height:"350px", width:"100%", objectFit:"cover"}}/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                </Jumbotron>
            </Container>
        </div>
    );
}