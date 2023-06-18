import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Header-Nav";
import { Container, Row, Col, Button } from "react-bootstrap";


function HomePage() {
  return (
    <Container>
      <Row className="homepage">
        <Col md={6}>
          {/* Content for the left column */}
          <h2>UP TO 30% OFF </h2>
          <p>All Laptops</p>
          <Button
            variant="dark"
            className="fs-3 ps-4 pe-4 pt-2 pb-2 w-auto"
            href="/Products"
          >
            Shop Now
          </Button>
        </Col>
        <Col md={6} className="pe-5">
          {
            <img
              src="laptops/hero.jpg"
              style={{ width: "90%", height: "100%" }}
              alt=""
            />
          }
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
