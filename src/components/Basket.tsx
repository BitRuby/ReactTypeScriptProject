import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import BasketPayment from "./BasketPayment";
import BasketProducts from "./BasketProducts";
import BasketSummary from "./BasketSummary";
import Buttons from "./Buttons";

enum BasketViews {
  PRODUCTS,
  PAYMENT,
  SUMMARY,
}

export default function Basket() {
  const [view, setView] = useState(BasketViews.PRODUCTS);

  const nextViewAction = () => {
    if (view === BasketViews.PRODUCTS) setView(BasketViews.PAYMENT);
    else setView(BasketViews.SUMMARY);
  };

  const previousViewAction = () => {
    if (view === BasketViews.SUMMARY) setView(BasketViews.PAYMENT);
    else setView(BasketViews.PRODUCTS);
  };

  return (
    <Container>
      <ProgressBar variant="info" now={view * 50} />
      {view === BasketViews.PRODUCTS && <BasketProducts />}
      {view === BasketViews.PAYMENT && <BasketPayment />}
      {view === BasketViews.SUMMARY && <BasketSummary />}
      <Buttons
        nextView={nextViewAction}
        previousView={previousViewAction}
        showPreviousButton={view === 1}
        showNextButton={view !== 2}
      />
    </Container>
  );
}
