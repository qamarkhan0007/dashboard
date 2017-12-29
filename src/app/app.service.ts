import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
    dataValue: any;
    token: any;

  constructor(private _http: Http) { }
  authLogin(data: any) {
      console.log('service file>>>>>>>', data);
      const _path: string = ('http://localhost:3000/3.0/dashboard/users/auth?key=DASHBOARD'),
      body = JSON.stringify({'email': (data.email).toLowerCase(), 'password': data.password}),
      headers = new Headers({'Content-Type': 'application/json'}),
      options = new RequestOptions({headers: headers});
      console.log('>>>>>>>body>>>>>>', body);
      console.log('>>>>>>>path>>>>>>', _path);
      console.log('>>>>>>>options>>>>>>', options);
      return this._http.post(_path, body, options).map(res => {
        return res.json();
    });
    }
    getUser(brand) {
        console.log('.........', brand);
        brand = brand + '_dev';
        console.log('pppppppppp', brand);
        const _path: string = ('http://localhost:3000/3.0/users?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers: headers});
        console.log(',,,,,,,,,,,,,,');
        return this._http.get(_path, options).map(res => {
        console.log('res in service ', res);
            return res.json();
        });
    }

    getStores(brand) {
        brand = brand + '_dev';
        const _path: string = ('http://localhost:3000/3.0/store_locations?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers: headers});
        return this._http.get(_path, options).map(res => {
            return res.json();
        });
    }
    getDiscounts(brand) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue.user_auth_token);
        const _path: string = ('http://localhost:3000/3.0/discount_codes?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers: headers});
        return this._http.get(_path, options).map(res => {
            return res.json();
        });

    }
}
