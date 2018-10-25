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

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product)
    alert(`Deleted product ${product.id}`)
    this.dataService.deleteProduct(product).subscribe()
  }

}
