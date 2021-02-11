import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Shop-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/basket">
            Basket{" "}
            <Badge pill variant="primary">
              5
            </Badge>
          </Link>
          <Link to="/addCard">Add card</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
