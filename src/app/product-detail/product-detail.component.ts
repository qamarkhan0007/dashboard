import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    brand: any;
    product_id: any;
    productById: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.brand = params['pro_brand'];
          this.product_id = params['product_id'];
          console.log('>>>>product_details>>>>>>>', this.brand);
          this.getProductsById();
      });
  }
      getProductsById() {
          this.service.getProductsById(this.brand, this.product_id).subscribe(res => {
              this.productById = res.data[0];
              console.log('>>>>>>>>>>',   this.productById);
          });

      }
  }
