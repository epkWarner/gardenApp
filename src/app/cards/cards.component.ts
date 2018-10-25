import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.class';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit {
  sessionToken = localStorage.getItem("sessionToken")

  constructor() { }

  ngOnInit() {
  }
  public _card = ''

  @Output() click = new EventEmitter<any>()
  ShopComponent() {
    this.click.next(this._card)
  }

  @Input()
  set card(card: string) {
    this._card = card
  }
  get card(): string {
    return this._card
  }

  delete(product: Product): void {
    console.log(this.sessionToken, product.id)
  }

}
