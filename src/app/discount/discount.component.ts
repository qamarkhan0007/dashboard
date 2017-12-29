import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
    brand: any;
    data: any;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;
  constructor(private route: ActivatedRoute , private service: AppService) { }

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
  }
