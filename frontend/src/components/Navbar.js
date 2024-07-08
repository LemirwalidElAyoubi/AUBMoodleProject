import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Student Management System
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
