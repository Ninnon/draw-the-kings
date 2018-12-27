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

  constructor(private cardsService: CardsService) {}
  
  //get deck id on initialization to use on every subsequent call to draw new cards
  ngOnInit() {
    this.getDeckId();
  }

  private getDeckId() {
    this.cardsService.getDeckId()
    .subscribe(
      response => {
        this.id = response["deck_id"];
      }
    )
  }

  onDrawCards() {
    this.cardsService.drawCards(this.id)
     .subscribe(
        response => {
          response["cards"].forEach(card => {             // used to go through each card drawn and push it onto our array
            this.cards.push(card);

            if(card["value"].toLowerCase() === "king") {        //check to see if the value is king. If it is, increment kingcounter to keep track of how many are drawn
              this.kingCounter++;
            }
            if(this.kingCounter >= 4) {                     //each time the button is clicked, we will alert once there have been 4 kings drawn
              alert("4 kings have been drawn!"); 
            }
          });
        }
    )
  }

}
