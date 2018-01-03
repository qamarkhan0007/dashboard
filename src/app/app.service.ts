import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
    dataValue: any;
    token: any;

  constructor(private _http: Http) { }
  authLogin(data: any) {
      const _path: string = ('http://localhost:3000/3.0/dashboard/users/auth?key=DASHBOARD'),
      body = JSON.stringify({'email': (data.email).toLowerCase(), 'password': data.password}),
      headers = new Headers({'Content-Type': 'application/json'}),
      options = new RequestOptions({headers: headers});
      return this._http.post(_path, body, options).map(res => {
        return res.json();
    });
    }
    getUser(brand) {
        brand = brand + '_dev';
        const _path: string = ('http://localhost:3000/3.0/users?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers: headers});
        return this._http.get(_path, options).map(res => {
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
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/discount_codes?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
        options = new RequestOptions({headers: headers});
        return this._http.get(_path, {headers: headers} )
        .map((res: any) => {
          return res.json();
        });
    }
    createDiscount(obj: any, brand) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/discount_codes?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
        return this._http.post(_path, obj, {headers: headers})
        .map((res: any) => {
          console.log('Response>>>>>>>>>>>>>>', res);
          return res.json();
        });
    }
    findOneTemplate(name, brand) {
      brand = brand + '_dev';
      this.dataValue = localStorage.getItem('token');
      this.token = 'Basic ' + btoa('token:' + this.dataValue);
      const _path: string = ('http://localhost:3000/3.0/mail/templates/' + name + '?key=' + brand),
      headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
      return this._http.get(_path, {headers: headers}).map(res => {
          return res.json();
      });
    }

    updateTemplate(subject, from_name, from_email, text, html, brand, name) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/mail/templates/' + name + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
        body: any = JSON.stringify({'subject': subject, 'name': name, 'from_name': from_name, 'from_email' : from_email , 'text': text ,
         'html' : html });
        return this._http.put(_path, body, {headers: headers}).map(res => {
            return res.json();
        });
    }
    updateCommonTemplate(content , brand , name) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/mail/templates/common/' + name + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
        body: any = JSON.stringify({'content': content , 'name': name });
        return this._http.put(_path, body, {headers: headers}).map(res => {
            return res.json();
        });
    }

        findTemplates(brand) {
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/mail/templates/' + name + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
            return this._http.get(_path, {headers: headers}).map(res => {
                return res.json();
            });
        }

        findOneCommonTemplate(common, brand) {
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/mail/templates/common/' + common + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
            return this._http.get(_path, {headers: headers}).map(res => {
                return res.json();
            });
        }

        findCommonTemplate(brand) {
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/mail/templates/common/' + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
            return this._http.get(_path, {headers: headers}).map(res => {
                return res.json();
            });
        }

        getOrder(brand, order_id) {
                brand = brand + '_dev';
                const _path: string = ('http://localhost:3000/3.0/orders/' + order_id + '?key=' + brand),
                headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
                return this._http.get(_path, {headers: headers}).map(res => {
                    return res.json();
                });
        }

        getInventory(brand, product_id) {
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/products/' + product_id  + '/get_inventory' + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
            return this._http.get(_path, {headers: headers}).map(res => {
                return res.json();
            });
        }
        adjustInventory(brand, ware, htk , tro , mars, product_id) {
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/products/' + product_id  + '/adjust_inventory' + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
            body: any = {'tro': Number(tro) , 'warehouse': Number(ware) , 'kmarsoptical': Number(mars) , 'htk_quantity': Number(htk) };
            console.log('>>>>>>>>>body', body);
            return this._http.put(_path, body,  {headers: headers}).map(res => {
                console.log('>>>>>>>>>>>res', res);
                return res.json();
            });
        }
    }
