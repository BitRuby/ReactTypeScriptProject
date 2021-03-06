import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { ListElements, El, Total } from "./BasketProducts.styles";

export default function BasketProducts() {
  return (
    <Container>
      <h1>Summary</h1>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <ListElements>
            <El>2</El>
            <El>McDouble</El>
            <El>12 PLN</El>
          </ListElements>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListElements>
            <El>1</El>
            <El>Chesseburger</El>
            <El>5 PLN</El>
          </ListElements>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListElements>
            <El>1</El>
            <El>Big Mac</El>
            <El>10 PLN</El>
          </ListElements>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListElements>
            <El>2</El>
            <El>French Frites</El>
            <El>10 PLN</El>
          </ListElements>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListElements>
            <El>1</El>
            <El>Coca Cola Zero</El>
            <El>1 PLN</El>
          </ListElements>
        </ListGroup.Item>
      </ListGroup>
      <Total>Grand total: 38 PLN</Total>
    </Container>
  );
}
