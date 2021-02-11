export interface CardsProps {
  cards?: [];
  activeCardId?: number;
}

export interface AddCardFormProps {
  saveCard: (card: CardElement) => void;
  cards: number;
}

export interface CardElement {
  id?: number;
  name: string;
  cardNumber: string;
  expiredDate: string;
  cardHolder: string;
  balance: number;
  backgroundColor: string;
}
