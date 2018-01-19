import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  brand: any;
  productData: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['pro_brand'];
      this.getProducts();
    });
  }
  getProducts() {
    this.service.getProducts(this.brand).subscribe(res => {
      this.productData = res.data;
    });
  }
}
