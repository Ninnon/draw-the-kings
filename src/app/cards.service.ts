import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) { }

  getDeckId() {
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=0";
    return this.httpClient.get(url);
  }
}
