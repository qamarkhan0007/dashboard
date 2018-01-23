import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
    selector: 'app-order-htk',
    templateUrl: './order-htk.component.html',
    styleUrls: ['./order-htk.component.css']
})
export class OrderHtkComponent implements OnInit {
    token: any;
    brand: any;
    orderData: any = [];
    data: any;
    response: any;
    constructor(private route: ActivatedRoute , private _service: AppService, private router: Router) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        this.getbrands();
    }
    getbrands() {
        this._service.getbrands().subscribe(res => {
            if (res.data) {
                this.brand =  res.data;
                this.brand.splice(0, 1);
                this.brand.splice(7, 1);
            }
            for (let i = 0 ; i < this.brand.length; i++) {
                let a;
                a = this.brand[i].brand_key.split('_');
                this._service.getOrders(a[0]).subscribe( response => {
                    if (response) {
                        this.orderData[this.brand[i].brand_key] = response.data;
                        console.log(response.data);
                    }
                });
            }
        });
    }
    shipHtk(email, order_id, brand) {
        this.data = {
            'courier': 'USPS',
            email: email.checked
        };
        console.log('>>AP>>>>>>>this.data>>>>>', order_id);
        this._service.shipHtk(this.data, order_id, brand).subscribe(res => {
            this.response = res.data;
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.response);
        });
    }
}
