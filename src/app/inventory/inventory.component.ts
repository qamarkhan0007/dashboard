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
    getProductData: any;
    updateInventoryData: any;
    update: any;
    msg: any;
    response: any;
    up: any = false;
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
        let that;
        this.getProductById(product_id);
        this.service.getInventory(this.brand, product_id).subscribe(res => {
            if (Object.keys(res.data).length) {
                console.log('I am Inside ???????????');
                this.getInventoryData = res.data;
                this.responseData = true;
            }else {
                console.log('I am Outside ????????????');
                this.getInventoryData = {};
                this.responseData = false;
                this.up = true;
                this.response = 'No Product Found';
            }
        });
        that = this;
        setTimeout(function () {
            that.up = false;
        }, 2000);
    }
    getProductById(product_id) {
        this.service.getProductById(this.brand, product_id).subscribe(res => {
            this.getProductData = res.data[0];
        });
    }
    updateInventory(update , file) {
        let that;
        this.service.updateInventory(this.brand, update, file.value).subscribe(res => {
            this.updateInventoryData = res.data;
            if (this.updateInventoryData) {
                this.msg = true;
                this.update = 'data updated succesfuly';
            }
            that = this;
            setTimeout(function () {
                that.msg = false;
            }, 2000);
            file.value = '';
        });
    }
    adjustInventory(ware, htk , tro , mars, product_id) {
        this.save = 'Saving....';
        this.service.adjustInventory(this.brand, ware, htk , tro , mars , product_id).subscribe(res => {
            this.adjustInventoryData = res.data;
            this.aadjustInventory = true;
        });
    }
}
