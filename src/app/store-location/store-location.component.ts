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
  private CurrentPageValue: any = 1;
  private selectedValue: any = 10;
  constructor(private service: AppService , private route: ActivatedRoute) { }

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
          console.log('//////////////', this.data);
        });
      });
   }
  }