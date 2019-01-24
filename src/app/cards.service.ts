import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// add interfaces to be able to use for what the observable returns
interface IDeckResponse {
  remaining: number;
  cards: ICard[];
  success: boolean;
  deck_id: string;
}

export interface ICard {
  code: string;
  image: string;
  images: any;
  suit: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) { }

// returns an observable of any for now that we consume in the app component
  public getDeckId(): Observable<IDeckResponse> {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=0';
    return this.httpClient.get<IDeckResponse>(url);
  }
// returns an observable of any for now that we consume in the app component
  public drawCards(id: string): Observable<IDeckResponse> {
    const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`;
    return this.httpClient.get<IDeckResponse>(url);
  }
}
