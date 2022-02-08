import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  private productService: ProductService
  private router: Router;
  product: Product = {
    name: '',
    price: 0
  }

  constructor(service: ProductService, router: Router) {
    this.productService = service;
    this.router = router;
  }

  ngOnInit(): void { }

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("operation executed successfully");
      this.router.navigate(["/products"]);
    });
    
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

}
