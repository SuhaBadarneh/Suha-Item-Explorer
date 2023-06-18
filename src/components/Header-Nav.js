import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar className="header-nav p-4" expand="lg" sticky="top">
      <Navbar.Brand className="text-light fs-2 ps-3" To="/">
        LaptopLand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link className="text-light" To="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" To="/products">
            Products
          </Nav.Link>

          <Nav.Link className="text-light" href="#link">
            Blog
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            About Us
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
