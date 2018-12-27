import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: string;
  cards: any[] = [];
  kingCounter: number = 0;
  hasAlerted: boolean = false;

  constructor(private cardsService: CardsService) {}
  
  //get deck id on initialization to use on every subsequent call to draw new cards
  ngOnInit() {
    this.getDeckId();
  }

  private getDeckId() {
    this.cardsService.getDeckId()
    .subscribe(
      response => {
        this.id = response.deck_id;
      }
    )
  }
  public onDrawCards() {
    this.cardsService.drawCards(this.id)
     .subscribe(
        response => {
          response.cards.forEach(card => {            // used to go through each card drawn and push it onto our array
            this.cards.push(card);
            this.checkForKing(card);
          });
        }
    )
  }
  private checkForKing(card: any) {
    if (card.value.toLowerCase() === "king") {        //check to see if the value is king. If it is, increment kingcounter to keep track of how many are drawn
      this.kingCounter++;
    }
    if (this.kingCounter === 4 && !this.hasAlerted) {                     //we will alert only once once 4 kings have been drawn
      alert("4 kings have been drawn!");
      this.hasAlerted = true;
    }
  }
}
