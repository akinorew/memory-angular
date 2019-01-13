import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from './deck';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flip', [
      state('open', style({
        transform: 'rotateY(0deg)',
      })),
      state('closed', style({
        transform: 'rotateY(180deg)',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
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
