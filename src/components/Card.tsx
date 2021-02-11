import React from "react";
import { CardContainer, CardName, CardDetails } from "./Card.styles";

interface Props {
  name: string;
  cardNumber: string;
  expiredDate: string;
  cardHolder: string;
  backgroundColor: string;
}

export default function Card({ name, cardNumber, expiredDate, cardHolder, backgroundColor }: Props) {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardName>{name}</CardName>
      <CardDetails>{cardNumber.replace(/\d{4}(?=.)/g, '$& ')}</CardDetails>
      <CardDetails>{expiredDate}</CardDetails>
      <CardDetails>{cardHolder}</CardDetails>
    </CardContainer>
  );
}
