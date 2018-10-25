import { Component, OnInit } from '@angular/core';

import { Product } from '../product.class';
import { DataService } from '../data.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  products: Product[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {
    this.dataService.getProducts()
      .subscribe(products => this.products = products)
  }

}
