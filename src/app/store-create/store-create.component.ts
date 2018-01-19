import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {
    storeData: any;
    brand: any;
    token: any;
    data: any;

  constructor(private service: AppService , private route: ActivatedRoute, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
    });
  }
  createStore(kiosk_id, kiosk_name, nameMailing, address1, address2, city, state, zip, country, phone, authorize ) {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
      const obj = {
        'name': kiosk_name.value,
        'kiosk_id': kiosk_id.value,
        'address': {
          'name': kiosk_name.value,
          'phone': phone.value,
          'address1': address1.value,
          'address2': address2.value,
          'city': city.value,
          'state': state.value,
          'zip': zip.value,
          'country': country.value
        },
        'pin_codes': [zip.value],
        'is_cc_authorized': authorize.checked
      };
      this.service.createStore(obj, this.brand)
      .subscribe(res => {
        this.storeData = res.data;
      });
    });
    kiosk_id.value = '';
    kiosk_name.value = '';
    address1.value = '';
    address2.value = '';
    city.value = '';
    state.value = '';
    zip.value = '';
    country.value = '';
    phone.value = '';
    nameMailing.value = '';
    window.scroll(0, 0);
  }

}
