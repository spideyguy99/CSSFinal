import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';

export default function Navigation(){
    return(
      <div className={"navHolder"}>
          <Navbar bg={"dark"} expand={"lg"} variant={"dark"}>
              <LinkContainer to="/">
                  <div>
                      <HomeIcon className={"icon"}/>
                      <Navbar.Brand>Super Duper Ice Cream</Navbar.Brand>
                  </div>
              </LinkContainer>
              <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
              <Navbar.Collapse id={"basic-navbar-nav"}>
                  <Nav className={"mr-auto"}>
                      <LinkContainer to={"/flavors"}>
                          <Nav.Link>Flavors</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to={"/about"}>
                          <Nav.Link>About</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to={"/contact"}>
                          <Nav.Link>Contact</Nav.Link>
                      </LinkContainer>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
    );
}