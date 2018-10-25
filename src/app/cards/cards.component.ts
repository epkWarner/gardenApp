import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public _card = ''

  @Input()
  set card(card: string) {
    this._card = card
  }
  get card(): string {
    return this._card
  }

}
