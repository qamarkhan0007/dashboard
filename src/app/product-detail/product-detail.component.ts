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
    constructor(private route: ActivatedRoute , private service: AppService, private router: Router) {

     }

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
}
