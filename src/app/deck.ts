export class Card {
  flipped: boolean;
  image: string;
  value: string;
  suit: string;
  code: string;
}

export class Deck {
  cards: Array<Card>;
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}
