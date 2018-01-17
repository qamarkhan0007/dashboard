import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-store-update',
    templateUrl: './store-update.component.html',
    styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {
    constructor(private service: AppService , private route: ActivatedRoute, private router: Router) { }
    data: any;
    brand: any;
    kiosk_id: any;
    status: any;
    pins: any = [];
    updatedataValue: any;
    statusupdate: any;
    update: any;
    pinUpdated: any;
    statuschange: any = false;

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.kiosk_id = params['kiosk_id'];
            this.getKiosk();
        });
    }
    getKiosk() {
        this.service.getKiosk(this.brand,  this.kiosk_id).subscribe(res => {
            this.data = res.data;
            this.status = true;
        });
    }
    addMe(new_pin) {
        this.pins.push(new_pin);
        this.data.pin_codes = this.data.pin_codes.concat(this.pins);
        this.pins = [];
        this.statuschange = true;
        this.pinUpdated = 'pin Updated !!!!';
        window.scroll(0, 0);
    }
    updateStore(form) {
        let that;
        if (form.is_cc_authorized === 1) {
            form.is_cc_authorized = true;
        }else {
            form.is_cc_authorized = false;
        }
        this.updatedataValue = {
            'name': form.name ,
            'kiosk_id': form.kiosk_id,
            'address': {
                'name': form.name,
                'phone': form.phone,
                'address1': form.address1,
                'address2': form.address2,
                'city': form.city,
                'state': form.state,
                'zip': form.zip,
                'country': form.country,
            },
            pin_codes: form.pin_codes,
            is_cc_authorized: form.is_cc_authorized
        };
        this.service.updateData(this.updatedataValue, this.brand).subscribe(res => {
            if (res.data) {
                this.update = true;
                this.statusupdate = 'Updated Sucessfully';
                window.scroll(0, 0);
            }
        });
        that = this;
        setTimeout(function () {
            that.update = false;
        }, 2000);
    }
}
