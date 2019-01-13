import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from './deck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {s

  @Input() card: Card;
  @Output() flip = new EventEmitter<Card>();
  flipped: false;

  constructor() { }

  flipCard() {
    this.flipped = !this.flipped;
    this.flip.emit(this.card);
  }
}
