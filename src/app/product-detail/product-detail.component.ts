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
  showProd: any = false;
  prices: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['pro_brand'];
      this.product_id = params['product_id'];
      this.getProductsById();
    });
  }
  getProductsById() {
    this.service.getProductsById(this.brand, this.product_id).subscribe(res => {
      if (res.data) {
        this.productById = res.data[0];
        this.showProd = true;
      }
    });
  }
  addUpc() {
    alert('This API is not working ...');
  }
  updateProduct(form) {
    this.prices = {
      'prices': {
        'NO_LENS_PRICE': form.NO_LENS_PRICE,
        'STANDARD_INDEX_LENS_PRICE': form.STANDARD_INDEX_LENS_PRICE,
        'HIGH_INDEX_LENS_PRICE': form.HIGH_INDEX_LENS_PRICE,
        'RX_SUN_LENS_PRICE': 1212,
        'NON_RX_SUN_LENS_PRICE': 1212,
        'READING_LENS_PRICE': form.READING_LENS_PRICE,
        'PLANO_LENS_PRICE': form.PLANO_LENS_PRICE,
        'PRG_STANDARD_LENS_PRICE': form.PRG_STANDARD_LENS_PRICE,
        'PRG_HIGH_INDEX_LENS_PRICE': form.PRG_HIGH_INDEX_LENS_PRICE,
        'PRG_RX_SUN_LENS_PRICE': 12,
        'ORIGINAL_RX_PRICE': 129,
        'ORIGINAL_SUN_PRICE': 1212
      },
      'assets': {
        'front-eyewear-thumb': []
      },
      'slug': null,
      'measurements': {
        'lens_height': form.lens_height,
        'bridge': form.bridge,
        'temple': form.temple,
        'lens_width': form.lens_width,
        'lens_heigh': 3
      },
      'tags': form.tags,
      'lens_color': form.lens_color,
      'name': form.name,
      'product_type': '22',
      'color': form.color,
      'legacy_product_id': form.legacy_product_id,
      'product_gender': '1',
      'description': form.description,
      'details': form.details,
      'social_id': form.social_id,
      'product_id': form.product_id
    };
    this.service.updateProduct(this.brand, this.prices, form.product_id).subscribe(res => {
      if (res.code === 200) {
        this.router.navigate(['./home/product/' + this.brand]);
      }
    });
  }
}
