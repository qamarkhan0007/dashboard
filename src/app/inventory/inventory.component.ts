import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    brand: any;
    responseData: any;
    save: any;
    aadjustInventory: any;
    token: any;
    getInventoryData: any;
    adjustInventoryData: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.brand = params['brand'];
        console.log('hello');
        this.callMe();
      });
  }
  callMe() {
    this.router.events.subscribe((evt) => {
      if (evt) {
        location.reload();
      }
    });
  }

 getInventory(product_id) {
   console.log(product_id);
   this.service.getInventory(this.brand, product_id).subscribe(res => {
       this.getInventoryData = res.data;
       console.log('>>>>>>>>>>>>', this.getInventoryData);
       this.responseData = true;
   });
 }

 adjustInventory(ware, htk , tro , mars, product_id) {
   this.save = 'Saving....';
   this.service.adjustInventory(this.brand, ware, htk , tro , mars , product_id).subscribe(res => {
       this.adjustInventoryData = res.data;
       console.log('>>>>>>>>>>>>', this.adjustInventoryData);
       this.aadjustInventory = true;
   });
 }
}
