import { CardElement } from "../components/Cards.types";
import * as actions from "./actions";
import { COLORS } from "./constants";

interface Action {
  type: string;
  payload?: unknown;
}

const initialState = {
  cards: [
    {
      id: 0,
      name: "Visa #1",
      cardNumber: "4024007189191645",
      expiredDate: "23/04",
      cardHolder: "JAN KOWALSKI",
      balance: 500,
      backgroundColor: COLORS.GREEN,
    },
    {
      id: 1,
      name: "Visa Electron #2",
      cardNumber: "5486290822202080",
      expiredDate: "23/08",
      cardHolder: "JAN KOWALSKI",
      balance: 0,
      backgroundColor: COLORS.BLUE,
    },
    {
      id: 2,
      name: "Master Card #3",
      cardNumber: "4913781766907946",
      expiredDate: "24/05",
      cardHolder: "JAN KOWALSKI",
      balance: 30,
      backgroundColor: COLORS.ORANGE,
    },
  ],
  activeCardId: 0,
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actions.ADD_CARD:
      const newCard = action.payload as CardElement;
      return {
        ...state,
        activeCardId: state.cards.length,
        cards: [...state.cards, { id: state.cards.length, ...newCard }],
      };
    default:
      return state;
  }
}
