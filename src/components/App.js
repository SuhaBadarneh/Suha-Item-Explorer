import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";

import List from "./List";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import LaptopDetails from "./LaptopDetails";
function Header() {
  return (
    <Navbar className="header-nav p-4" expand="lg" sticky="top">
      <Navbar.Brand className="text-light fs-2 ps-3" href="/">
        LaptopLand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link className="text-light" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="/products">
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
function App() {
  return (
    <div className="contain">
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Products" exact Component={List} />
        <Route path="/LaptopDetails/:id" Component={LaptopDetails}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
