import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.css']
})
export class StoreLocationComponent implements OnInit {
    data: any;
    brand: any;
    token: any;
    order: any = 'name';
    reverse: any = false;
    arrLenght: any = 0;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;
    constructor(private service: AppService , private route: ActivatedRoute) {
      this.token = localStorage.getItem('token');
    }

    ngOnInit() {
      this.getStores();
    }
    getStores() {
      this.route.params.subscribe((params: Params) => {
        this.brand = params['brand'];
        this.service.getStores(this.brand)
        .subscribe(res => {
          if ( res.data.length > 0 ) {
            this.data = res.data;
          }else {
            this.data = [];
          }
        });
      });
    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    countMe(count) {
        this.arrLenght = count;
    }
}
