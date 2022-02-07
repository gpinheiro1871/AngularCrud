import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  coolAttribute = "randomValue";
  coolCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(): void{
    console.log("doing something!");
    this.coolCounter++;
  }
}
