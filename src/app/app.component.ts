import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cardsService: CardsService) {}
  
  ngOnInit() {
    this.getDeckId();
  }

  getDeckId() {
    this.cardsService.getDeckId();
  }

}
