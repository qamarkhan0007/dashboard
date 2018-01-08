import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
    dataValue: any;
    token: any;
    response: any;

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
    createStore(obj, brand) {
        console.log('obj obj obj ', obj);
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/store_locations?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
        return this._http.post(_path, obj, {headers: headers})
        .map((res: any) => {
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

    getOrders(brand) {
        brand = brand + '_dev';
        const _path: string = ('http://localhost:3000/3.0/orders/' + '?key=' + brand),
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
        return this._http.put(_path, body,  {headers: headers}).map(res => {
            return res.json();
        });
    }
    getdiscount(discount_name, brand) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/discount_codes/' + discount_name + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
        return this._http.get(_path, {headers: headers}).map(res => {
            return res.json();
        });
    }
    updateDiscount(discount_name, discount_type, amount, quantity, discount_reason, expiration_date, brand) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/discount_codes/' + discount_name + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
        body: any = {'discount_code': discount_name, 'discount_type': discount_type, 'amount': Number(amount), 'quantity': Number(quantity),
        'discount_reason': discount_reason,
        'expiration_date': expiration_date};
        return this._http.put(_path, body,  {headers: headers}).map(res => {
            return res.json();
        });
    }
    ErpSend(action, perform, payload, brand) {
        brand = brand + '_dev';
        const _path: string = ('http://localhost:3000/3.0/erp_integration/' + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json'}),
        body: any = {'action': action, 'payload': payload, performed_at: perform};
        return this._http.post(_path, body,  {headers: headers}).map(res => {
            return res.json();
        });
    }
    cancelItem(order_id, item, brand, return_description, selectedvalue) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/orders/' + order_id + '/eyewear/cancel/' + '?key=' + brand + '&items=' + item),
        headers = new Headers({'Content-Type': 'application/json' , 'Authorization': this.token }),
        body: any = {'description': return_description, 'reason': selectedvalue };
        return this._http.post(_path, body,  {headers: headers}).map(res => {
            return res.json();
        });
    }
    getCustomerByEmail(email, brand) {
        console.log('>>>>>>>>>>email>>', email);
        console.log('>>>>brand>>>>>>>>', brand);
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/users/' + email + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json' , 'Authorization': this.token });
        return this._http.get(_path,  {headers: headers}).map(res => {
            console.log('......>>>>res>>>>>>>>', res);
            return res.json();
        });
    }
    getOrdersByUsers(brand, email) {
        brand = brand + '_dev';
        this.dataValue = localStorage.getItem('token');
        this.token = 'Basic ' + btoa('token:' + this.dataValue);
        const _path: string = ('http://localhost:3000/3.0/users/' + email + '/orders' + '?key=' + brand),
        headers = new Headers({'Content-Type': 'application/json' , 'Authorization': this.token });
        return this._http.get(_path,  {headers: headers}).map(res => {
            return res.json();
        });
    }
    saveUser(response, brand) {
           this.response = response;
            brand = brand + '_dev';
            this.dataValue = localStorage.getItem('token');
            this.token = 'Basic ' + btoa('token:' + this.dataValue);
            const _path: string = ('http://localhost:3000/3.0/users/' + response.email + '?key=' + brand),
            headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
            body: any = { 'first_name': response.first_name , 'last_name': response.last_name, 'email': response.email,
             'guest': response.guest, 'roles': response.roles, 'marketing': { 'email_opt_in': response.marketing.email_opt_in },
             'active_flag': true} ;
            return this._http.put(_path, body,  {headers: headers}).map(res => {
                return res.json();
            });


    }
}
