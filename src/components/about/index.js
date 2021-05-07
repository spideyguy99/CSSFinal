import React from "react";
import {Container, Image, Row, Col, Carousel, Jumbotron} from "react-bootstrap";

import AboutImg from '../assets/aboutImage.jpg';

export default function About(){
    return(
        <div className={"holder"}>
            <Container fluid>
                <Jumbotron>
                    <div>
                        <h1 id={"abouthead"}>About Us</h1>
                        <div className={"aboutContainer"}>
                            <img alt={"About img"} className={"aboutimg"} src={AboutImg}/>
                            <p>
                                Super duper Ice Cream is the best ic cream in the world. Founded in 2019, Manthaniel Icereamo wanted ice cream to be super all the time. He used the same stuff that makes rubber duckies cry to make it taste so good.
                            </p>
                        </div>
                    </div>
                </Jumbotron>
            </Container>
         </div>
    );
}