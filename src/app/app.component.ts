import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck.service';
import { Card, Deck } from './deck';

const _ = require('lodash');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  card: Card;
  count = 4;
  deck: Deck;
  memoryCards: Array<Card>;
  score = 0;
  tries = 0;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.start();
  }

  getDeck(): void {
    this.deckService.getDeck().subscribe(deck => {
      this.deck = deck;
      this.getCards();
    });
  }

  getCards(): void {
    this.deckService.getCards(this.deck.deck_id, this.count).subscribe(deck => {
      this.deck.cards = [...JSON.parse(JSON.stringify(deck.cards)).concat(JSON.parse(JSON.stringify(deck.cards)))];
      this.memoryCards = _.shuffle(this.deck.cards);
    });
  }

  onFlip(card) {
    if (this.card) {
      if (this.card.value === card.value) {
        this.card = null;
        this.score++;
      } else {
        setTimeout(() => {
          this.card.flipped = false;
          card.flipped = false;
          this.card = null;
        }, 1000);
      }
      this.tries++;
    } else {
      this.card = card;
    }
  }

  start(): void {
    this.getDeck();
    this.score = 0;
    this.tries = 0;
  }
}
