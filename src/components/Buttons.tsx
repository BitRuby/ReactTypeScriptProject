import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { ButtonNavigate } from "./Buttons.styles";

interface Props {
  nextView?: () => void;
  previousView?: () => void;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
}

export default function Buttons({
  nextView,
  previousView,
  showPreviousButton,
  showNextButton,
}: Props) {
  return (
    <Container>
      <ButtonNavigate>
        {showNextButton && (
          <Button variant="primary" onClick={nextView}>
            Proceed
          </Button>
        )}
        {showPreviousButton && (
          <Button variant="secondary" onClick={previousView}>
            Back
          </Button>
        )}
      </ButtonNavigate>
    </Container>
  );
}
