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
    statusform: any;
    storeData: any;
    token: any;
    status: any;
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
    createStoreStatus() {
        this.statusform = true;
    }
    createStore(kiosk_id, kiosk_name, address1, address2, city, state, zip, country, phone, authorize ) {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            const obj = {
                'name': kiosk_name,
                'kiosk_id': kiosk_id,
                'address': {
                    'name': kiosk_name,
                    'phone': phone,
                    'address1': address1,
                    'address2': address2,
                    'city': city,
                    'state': state,
                    'zip': zip,
                    'country': country,
                },
                'pin_codes': [zip],
                'is_cc_authorized': authorize.checked
            };
            this.service.createStore(obj, this.brand)
            .subscribe(res => {
                this.storeData = res.data;
            });
        });
    }
    updateStore(koisk_id) {
        console.log('>>>>>>>>>>>');
        this.status = true;
    }
}
