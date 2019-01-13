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

  deck: Deck;
  memoryCards: Array<Card>;

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
    this.deckService.getCards(this.deck.deck_id, 2).subscribe(deck => {
      this.deck.cards = deck.cards;
      this.memoryCards = _.shuffle(this.deck.cards.concat(this.deck.cards));
    });
  }

  onFlip(flipped) {
    console.log('flip', flipped);
  }

  start(): void {
    this.getDeck();
  }
}
