import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h2>LaptopLand</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
              Sit, quasi? Ad maiores nihil voluptatibus amet
              <br /> ipsam nemo dignissimos sed commodi vero cumque
              <br /> quae dolorum, minus officia. Optio dolor odit natus.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h2>More From LaptopLand</h2>
            <ul className="footer-useful-links">
              <li>Our Story</li>
              <li>Blog</li>
              <li>Proucts</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h2>Let's Stay Connected</h2>
            <p>Enter your Email to unlock 10% OFF</p>
          </Col>
          <Col xs={12} md={3}>
            <h2>Social Media</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
