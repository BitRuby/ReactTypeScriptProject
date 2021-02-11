import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import { CardsContainer } from "./Cards.styles";
import { CardsProps, CardElement } from "./Cards.types";

export function Cards({ cards, activeCardId }: CardsProps) {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    setCarouselIndex(activeCardId as number);
  }, [activeCardId]);

  return (
    <CardsContainer>
      <Carousel
        interval={null}
        onSelect={setCarouselIndex}
        activeIndex={carouselIndex}
      >
        {cards?.map((e: CardElement) => (
          <Carousel.Item key={e.id}>
            <Card
              name={e.name}
              cardNumber={e.cardNumber}
              expiredDate={e.expiredDate}
              cardHolder={e.cardHolder}
              backgroundColor={e.backgroundColor}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </CardsContainer>
  );
}

const mapStateToProps = (state: any) => ({
  cards: state.cards,
  activeCardId: state.activeCardId,
});

export default connect(mapStateToProps)(Cards);
