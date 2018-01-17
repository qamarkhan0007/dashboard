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
  showUser(email, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/users/' + email + '?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
      console.log(res);
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
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/users/' + email + '?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json' , 'Authorization': this.token });
    return this._http.get(_path,  {headers: headers}).map(res => {
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
  getAllbatches() {
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/upc_codes/batch_names/?key=DASHBOARD'),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
      return res.json();
    });
  }
  createUpc(batchName, file) {
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/dashboard/upc_codes?key=DASHBOARD'),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
    body: any = {
      'batch_names': batchName ,
      'file': file
    };
    return this._http.post(_path, body, {headers: headers}).map(res => {
      return res.json();
    });
  }
  getProducts(brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    console.log('>>>>>>>>>>>', this.token);
    const _path: string = ('http://localhost:3000/3.0/products/?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
      console.log('>>>>>>>>>>>res products >>>>>>>>>>>>', res);
      return res.json();
    });
  }
  getProductsById(brand, product_id) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    console.log('>>>>>>>>>>>', this.token);
    const _path: string = ('http://localhost:3000/3.0/products/?key=' + brand + '&product_id=' + product_id),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
      console.log('>>>>>>>>>>>>>', res);
      return res.json();
    });
  }
  sendToLab(orderId, itemId, brand) {
    console.log(orderId, itemId, brand);
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/send_to_lab/?key=' + brand +
    '&lab=kmarsoptical&items=' + itemId),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, {},  {headers: headers}).map(res => {
      return res.json();
    });
  }
  createInternalNotes(order_id, notes, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + order_id + '/internal_notes/?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token}),
    body: any = {'message': notes};
    return this._http.post(_path, body,  {headers: headers}).map(res => {
      return res.json();
    });
  }
  receiveByLab(orderId, itemId, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/received_by_lab/?key=' + brand +
    '&lab_order_number=' + orderId + '&items=' + itemId),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, {},  {headers: headers}).map(res => {
      console.log('>>>>>>>>>receved by lab >>>>>>>>', res);
      return res.json();
    });
  }
  finishedProcessing(orderId, itemId, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/lab_finished_processing/?key=' + brand +
    '&items=' + itemId),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, {},  {headers: headers}).map(res => {
      console.log('>>>>>>>>>lab_finished_processing by lab >>>>>>>>', res);
      return res.json();
    });
  }
  receivedFromLab(orderId, itemId, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/receive_from_lab/?key=' + brand +
    '&items=' + itemId),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, {},  {headers: headers}).map(res => {
      console.log('>>>>>>>>>receive_from_lab >>>>>>>>', res);
      return res.json();
    });
  }
  return(orderId, itemId, brand, reason, description) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/authorize_return/?key=' + brand +
    '&items=' + itemId + '&reason=' + reason + '&description=' + description),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, {},  {headers: headers}).map(res => {
      console.log('>>>>>>>>>receive_from_lab >>>>>>>>', res);
      return res.json();
    });
  }
  shipped(orderId, itemId, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/orders/' + orderId + '/eyewear/ship/?key=' + brand),
    body: any = {'items': itemId, 'courier': 'USPS'},
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    console.log('>>>>>bodybody>>>>>>', JSON.stringify(body));
    return this._http.post(_path, body,  {headers: headers}).map(res => {
      console.log('>>>>>>>>>receive_from_lab >>>>>>>>', res);
      return res.json();
    });
  }
  getFrameColors(brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/lookup/frame_colors/?active_only=true&key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}

getLensColors(brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/lookup/lens_colors/?active_only=true&key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}
getNames(brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/lookup/styles/?active_only=true&key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}
getTemplateMap(brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/lookup/template_map/?active_only=true&key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}
createProduct(object, brand) {
    brand = brand + '_dev';
    this.dataValue = localStorage.getItem('token');
    this.token = 'Basic ' + btoa('token:' + this.dataValue);
    const _path: string = ('http://localhost:3000/3.0/products/?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
    return this._http.post(_path, object, {headers: headers}).map(res => {
        return res.json();
    });
}
getTags(brand) {
    brand = brand + '_dev';
    const _path: string = ('http://localhost:3000/3.0/products/tags?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}
getAssests(brand) {
    brand = brand + '_dev';
    const _path: string = ('http://localhost:3000/3.0/products/asset_groups?key=' + brand),
    headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(_path, {headers: headers}).map(res => {
        return res.json();
    });
}
resetPassword(email, brand) {
  brand = brand + '_dev';
  this.dataValue = localStorage.getItem('token');
  this.token = 'Basic ' + btoa('token:' + this.dataValue);
  const _path: string = ('http://localhost:3000/3.0/users/' + email + '/forgot_password?key=' + brand),
  headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.token});
  return this._http.post(_path, {}, {headers: headers}).map(res => {
      return res.json();
  });
}
}
