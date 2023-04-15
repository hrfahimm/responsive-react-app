import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="text-danger bold" href="#home">
            CAR
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#services">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/home#exparts">
                Exparts
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
