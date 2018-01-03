import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params } from '@angular/router';


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
  constructor(private route: ActivatedRoute , private service: AppService) { }

  ngOnInit() {
  }

 getInventory(product_id) {
     console.log('>>>>>>>>>>>>>>>0', product_id);
     this.route.params.subscribe((params: Params) => {
         this.brand = params['brand'];
         this.service.getInventory(this.brand, product_id).subscribe(res => {
             this.getInventory = res.data;
             console.log('>>>>>>>>>>>>', this.getInventory);
             this.responseData = 'true';
         });
     });
 }

 adjustInventory(ware, htk , tro , mars, product_id) {
     this.route.params.subscribe((params: Params) => {
         this.brand = params['brand'];
         this.save = 'Saving....';
         this.service.adjustInventory(this.brand, ware, htk , tro , mars , product_id).subscribe(res => {
             this.adjustInventory = res.data;
             console.log('>>>>>>>>>>>>', this.adjustInventory);
             this.aadjustInventory = 'true';
         });
     });
 }
}
