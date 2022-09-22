import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/userlist">Users</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/todos">My Todo</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
