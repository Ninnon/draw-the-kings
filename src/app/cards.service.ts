import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) { }

//returns an observable of any for now that we consume in the app component
  getDeckId(): Observable<any> {
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=0";
    return this.httpClient.get(url);
  }
//returns an observable of any for now that we consume in the app component
  drawCards(id: string): Observable<any> {
    const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`;
    return this.httpClient.get(url);
  }
}
