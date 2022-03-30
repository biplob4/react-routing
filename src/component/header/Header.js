import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CoustomLink from "../CoustomLink/CoustomLink";

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link><CoustomLink className="" to="/">Home</CoustomLink></Nav.Link>
              <Nav.Link><CoustomLink className="" to="/about">About</CoustomLink></Nav.Link>
              <Nav.Link><CoustomLink className="" to="/friends">Friend</CoustomLink></Nav.Link>
              <Nav.Link><CoustomLink className="" to="/post">Post</CoustomLink></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  );
};

export default Header;
