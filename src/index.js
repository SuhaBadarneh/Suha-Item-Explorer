import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">LOGO</div>
//       <ul>
//         <li>Home</li>
//         <li>Products</li>
//         <li>Gallery</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </header>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

///////////////////////////////////////////////

// function Menu() {
//   const pizzas = pizzaData;
//   const numPizzas = pizzas.length;
//   return (
//     <div className="menu">
//       <h2>Our Menu</h2>
//       {numPizzas > 0 ? (
//         <ul className="pizzas">
//           {pizzas.map((pizza) => (
//             <Pizza pizzaObj={pizza} key={pizza.name} />
//           ))}
//         </ul>
//       ) : (
//         <p>We're still working in our menu. Please come back later :)</p>
//       )}
//     </div>
//   );
// }
// function Pizza(props) {
//   return (
//     <div className="pizza">
//       <div>
//         <img src={props.pizzaObj.photoName} alt="" />
//       </div>
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>Price : {props.pizzaObj.price}</span>
//       </div>
//     </div>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <div className="order">
//           <p>we're open until {closeHour}:00 Come visit us or order Online</p>
//           <button className="btn">Order</button>
//         </div>
//       ) : (
//         <p>We're happy to welcome between 12 and 22</p>
//       )}
//     </footer>
//   );
// }
