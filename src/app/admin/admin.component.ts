import { Component, OnInit } from "@angular/core";
import { Product } from "../product.class";
import { DataService } from "../data.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  products: Product[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.dataService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> f3dff8a4b5fc1a9b4ff5976688bc00883dcda64f
