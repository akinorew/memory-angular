import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) {

  }

  getCards(deckId: string, count: number): Observable<Deck> {
    return this.http.get<Deck>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
  }

  getDeck(): Observable<Deck> {
    return this.http.get<Deck>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  }
}
