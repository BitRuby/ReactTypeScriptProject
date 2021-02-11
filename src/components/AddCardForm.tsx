import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AddCardFormProps, CardElement } from "./Cards.types";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import CustomToastSuccess from "./CustomToastSuccess";
import CustomToastError from "./CustomToastError";

export function AddCardForm({ saveCard, cards }: AddCardFormProps) {
  const [showToastError, setShowToastError] = useState<boolean>(false);
  const [showToastSuccess, setShowToastSuccess] = useState<boolean>(false);
  const [cardsCount, setCardsCount] = useState<number>(0);

  const submitForm = (e: any) => {
    e.preventDefault();
    if (!`${e.target[3].value}`.match(/^[0-9]{3}$/)) {
      setShowToastError(true);
      return;
    }
    const newCard: CardElement = {
      name: e.target[0].value,
      cardNumber: e.target[1].value,
      expiredDate: e.target[2].value,
      cardHolder: e.target[3].value,
      balance: 0,
      backgroundColor: e.target[4].value,
    };
    saveCard(newCard);
  };

  useEffect(() => {
    if (cards > cardsCount) setShowToastSuccess(true);
    setCardsCount(cards as number);
  }, [cards]);

  const handleShowToastError = () => {
    setShowToastError(false);
  };

  const handleShowToastSuccess = () => {
    setShowToastSuccess(false);
  };

  return (
    <Container>
      <h1>Add Card</h1>
      <form onSubmit={submitForm}>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Card name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Card name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Card number</Form.Label>
              <Form.Control size="sm" type="number" placeholder="Card number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Expire date</Form.Label>
              <Form.Control size="sm" type="date" placeholder="Expire date" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>CCV</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                placeholder="CCV"
                isValid={false}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control size="sm" type="color" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </form>
      <CustomToastError onClose={handleShowToastError} show={showToastError} />
      <CustomToastSuccess
        onClose={handleShowToastSuccess}
        show={showToastSuccess}
      />
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  cards: state.cards,
});

const mapDispatchToProps = {
  saveCard: (card: CardElement) => ({ type: actions.ADD_CARD, payload: card }),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardForm);
