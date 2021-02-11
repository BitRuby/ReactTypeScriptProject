import React from "react";
import Cards from "./Cards";
import Container from "react-bootstrap/Container";

export default function BasketPayment() {
  return (
    <Container>
      <h1>Choose payment method</h1>
      <Cards />
    </Container>
  );
}
