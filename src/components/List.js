import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LaptopDetails from "./LaptopDetails";
import { Link } from "react-router-dom";

const laptops = [
  {
    id: 1,
    brand: "Apple",
    describe:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness",
    model: "MacBook Pro",
    price: 1999,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    image: "laptops/MacBook-Pro.jpg",
  },
  {
    id: 2,
    brand: "Dell",
    describe:
      "The XPS 13 is a premium ultrabook laptop by Dell known for its sleek design, powerful performance, and high-quality display. It features a compact and lightweight design, vibrant display options, powerful hardware components",
    model: "XPS 13",
    price: 1499,
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    image: "laptops/DELL-XPS-13.png",
  },
  {
    id: 3,
    brand: "HP",
    describe:
      "The Envy 15 is a premium laptop model offered by HP. It combines a sleek design with powerful performance and high-end features. The Envy 15 typically features a 15-inch display with excellent resolution and color accuracy",
    model: "Envy 15",
    price: 1299,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "1TB SSD",
    image: "laptops/Lenovo-envy15.jpg",
  },
  {
    id: 4,
    brand: "Lenovo",
    describe:
      "The ThinkPad X1 Carbon is a flagship ultrabook laptop offered by Lenovo under their renowned ThinkPad line. Known for its exceptional build quality, durability, and powerful performance, the X1 Carbon is a popular choice among professionals",
    model: "ThinkPad X1 Carbon",
    price: 1799,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    image: "laptops/Lenovo-ThinkPad X1-Carbon.jpg",
  },
  {
    id: 5,
    brand: "Asus",
    describe:
      "The ZenBook 14 is a stylish and compact laptop model offered by Asus under their ZenBook series. Designed for portability and performance, the ZenBook 14 is a popular choice among students and professionals",
    model: "ZenBook 14",
    price: 1299,
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "512GB SSD",
    image: "laptops/ZenBook14.png",
  },
  {
    id: 6,
    brand: "Acer",
    describe:
      "The Predator Helios 300 is a high-performance gaming laptop offered by Acer under their popular Predator series. Designed for gaming enthusiasts, the Helios 300 delivers powerful gaming capabilities and cutting-edge features",
    model: "Predator Helios 300",
    price: 1399,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "1TB HDD",
    image: "laptops/Acer-Predator-Helios-300.jpg",
  },
  {
    id: 7,
    brand: "Microsoft",
    describe:
      "The Surface Laptop 4 is a premium laptop model offered by Microsoft under their Surface line. Combining sleek design, powerful performance, and versatility, the Surface Laptop 4 is designed for professionals and students seeking a high-quality",
    model: "Surface Laptop 4",
    price: 1599,
    processor: "AMD Ryzen 7",
    ram: "16GB",
    storage: "512GB SSD",
    image: "laptops/Microsoft.webp",
  },
  {
    id: 8,
    brand: "Razer",
    describe:
      "The Blade 15 is a high-performance gaming laptop offered by Razer, a renowned brand in the gaming industry. Designed for gamers and power users, the Blade 15 combines sleek aesthetics, powerful hardware, and cutting-edge features",
    model: "Blade 15",
    price: 2099,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "1TB SSD",
    image: "laptops/Razer.jpg",
  },
  {
    id: 9,
    brand: "Samsung",
    describe:
      "The Galaxy Book Pro is a sleek and lightweight laptop model offered by Samsung under their Galaxy Book series. Designed for productivity and portability, the Galaxy Book Pro combines style, performance, and connectivity",
    model: "Galaxy Book Pro",
    price: 1799,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    image: "laptops/Samsung.avif",
  },
];

// function Menu() {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// export default Menu;

const List = () => {
  return (
    <Row className="products-list">
      <h1>Laptops Lists</h1>
      {laptops.map((laptop) => (
        <Col sm={6} md={4} lg={3} className="card-col">
          <ProductCard laptopObj={laptop} key={laptop.id} />
        </Col>
      ))}
    </Row>
  );
};

function ProductCard(props) {
  return (
    <Card
      id={props.laptopObj.id}
      className="product-card"
      style={{ width: "30rem" }}
    >
      <Card.Img
        style={{ height: "25rem" }}
        variant="top"
        src={props.laptopObj.image}
      />
      <Card.Body className="card-body">
        <Card.Title className="fs-2">
          {props.laptopObj.model} / {props.laptopObj.brand}
        </Card.Title>
        <Card.Text>{props.laptopObj.describe}</Card.Text>
        <Button
          id={props.laptopObj.id}
          variant="dark"
          className="fs-4 p-2 w-50"
          href={`/LaptopDetails/${props.laptopObj.id}`}
        >
          Show Details
        </Button>
      </Card.Body>
    </Card>
  );
}
export default List;
