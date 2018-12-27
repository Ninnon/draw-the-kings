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
          response["cards"].forEach(card => {
            this.cards.push(card);
          });
        }
    )
  }

}
