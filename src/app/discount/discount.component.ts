import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  brand: any;
  data: any;
  msg: any;
  discountCode: any;
  currentDate: any;
  private CurrentPageValue: any = 1;
  private selectedValue: any = 10;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) { }

  ngOnInit() {
    this.getDiscounts();
  }

  getDiscounts() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
      this.service.getDiscounts(this.brand)
      .subscribe(res => {
        this.data = res.data;
      });
    });
  }
  checkExpired(checkMe) {
    if (checkMe.checked) {
      const sortExpire: any = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].expiration_date > new Date().toISOString().split('T')[0]) {
          sortExpire.push(this.data[i]);
        }
      }
      this.data = sortExpire;
    }else {
      this.getDiscounts();
    }
  }

  qtyAvailable(qty) {
    if (qty.checked) {
      const qtyAvailable: any = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].quantity > 0) {
          qtyAvailable.push(this.data[i]);
        }
      }
      this.data = qtyAvailable;
    }else {
      this.getDiscounts();
    }
  }

  createDiscount(discount_code: any, discount_type: any , amount: any, quantity: any, discount_reason: any, date: any) {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
      const obj = {
        discount_type: discount_type.value,
        amount: Number(amount.value),
        quantity: Number(quantity.value),
        discount_code: discount_code.value,
        discount_reason: discount_reason.value,
        expiration_date: date.value
      };
      this.service.createDiscount(obj, this.brand)
      .subscribe(res => {
        this.msg = 'Created successfully';
      }, err => {
        err._body = JSON.parse(err._body);
        this.msg = err._body.data.message;
      });
      discount_code.value = '';
      amount.value = '';
      quantity.value = '';
      discount_type.value = '';
      discount_reason.value = '';
      date.value = '';
    });
  }
}
