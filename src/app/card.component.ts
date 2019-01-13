import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from './deck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: Card;
  @Output() flip = new EventEmitter<Card>();

  constructor() { }

  flipCard() {
    this.card.flipped = !this.card.flipped;
    this.flip.emit(this.card);
  }
}
