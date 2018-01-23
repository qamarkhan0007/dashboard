import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: any;
  orderDataForIterate: any;
  foundOrder: any;
  items: any;
  prdId: any;
  state: any = false;
  cancelStatuss: any = true;
  brand: any;
  responseData: any;
  return_description: any;
  brandAfter: any;
  statte: any = false;
  status1: any = true;
  itm: any;
  itmId: any;
  response: any;
  getcustomerStatus: any = false;
  checkMe: any = false;
  store: any;
  address: any;
  getorderOfUsers: any;
  updateUserPage: any = false;
  firstName: any;
  lastName: any;
  brand1: any;
  email: any;
  tempArray: any = [];
  token: any;
  order_brand: any;
  order_id: any;
  internalNotes: any;
  selectedItem: any;
  status: any;
  shipment: any = false;
  shipArray = [];
  userEmail: any;
  marketingEmail: any;
  resetMsg: any = false;
  showMeStatus: any;
  myStatus: any = false;

  constructor(private route: ActivatedRoute , private _service: AppService, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['order_brand']) {
        this.order_brand = params['order_brand'];
        this.getOrders(params['order_brand']);
      }
    });
  }
  getOrders(brand) {
    this.brandAfter = brand;
    this._service.getOrders(brand).subscribe( res => {
      this.orderData =  res.data;
      this.orderDataForIterate =  this.orderData;
      this.processing();
    });
  }
  showMeOrder(orderId) {
    this.foundOrder = this.orderData.find(x => {
      return x.order_id === orderId;
    });
    this.items = this.foundOrder.items.eyewear.items ;
    this.order_id = orderId;
  }
  itemPrice(productId) {
    if (this.state) {
      this.prdId = productId;
      this.state = false;
    }else {
      this.prdId = productId;
      this.state = true;
    }
  }
  cancelStatus(value, item_id) {
    this.itm = item_id;
    this.cancelStatuss = value;
  }
  cancelItem(order_id, selectedvalue, item) {
    this._service.cancelItem(order_id, item, this.brandAfter, this.return_description, selectedvalue).subscribe(res => {
      this.responseData = res.data;
      if (res.data) {
        this.statte = true;
        this.itmId = item;
      }
    });
  }
  getCustomer(email) {
    this.getcustomerStatus = true;
    this.checkMe = true;
    this._service.getCustomerByEmail(email, this.brandAfter).subscribe(res => {
      this.response = res.data;
      this.store = this.response.store_credits;
      this.address = this.response.addresses;
      this._service.getOrdersByUsers(this.brandAfter, this.response.email).subscribe(respon => {
        this.getorderOfUsers = respon.data ;
      });
    });
  }
  cancel() {
    this.updateUserPage = false;
    this.checkMe = true;
  }
  toggelStatus(id) {
    if (this.myStatus) {
      this.showMeStatus = id;
      this.myStatus = false;
    }else {
      this.showMeStatus = id;
      this.myStatus = true;
    }
  }
  resetPassword(email) {
    let that;
    this._service.resetPassword(email, this.order_brand).subscribe(res => {
      this.resetMsg = true;
      that = this;
      setTimeout(function () {
        that.resetMsg = false;
      }, 2000);
    });
  }
  processing() {
    this.tempArray = [];
    if (this.orderDataForIterate) {
      this.orderDataForIterate.find(x => {
        if (x.status != null) {
          if (_.contains(['New_Order'], x.status)) {
            this.tempArray.push(x);
          }
        }
      });
      this.orderData = this.tempArray;
    }
    this.shipment = false;
  }
  atLab() {
    this.tempArray = [];
    if (this.orderDataForIterate) {
      this.orderDataForIterate.find(x => {
        if (x.status != null) {
          if (_.contains(['Add_To_lab'], x.status)) {
            this.tempArray.push(x);
          }
        }
      });
      this.orderData = this.tempArray;
    }
    this.shipment = false;
  }
  unshipped() {
    this.shipment = true;
    this.tempArray = [];
    if (this.orderDataForIterate) {
      this.orderDataForIterate.find(x => {
        if (x.status != null) {
          if (_.contains(['Lab_Finished', 'Partially_Shipped'], x.status)) {
            this.tempArray.push(x);
          }
        }
      });
      this.orderData = this.tempArray;
    }
  }
  updateUser(email, first, last , marketing, brand) {
    this.firstName = first;
    this.lastName = last;
    this.userEmail = email;
    this.brand1 = brand;
    this.marketingEmail = marketing;
    this.updateUserPage = true ;
  }
  saveUser(first, last, email, marketing, brand ) {
    this.response.first_name = first;
    this.response.last_name = last;
    this.response.email = email;
    if (marketing.checked) {
      this.response.marketing.email_opt_in = 1;
    }else {
      this.response.marketing.email_opt_in = 0;
    }
    this._service.saveUser(this.response, brand).subscribe(res => {
      if (res.data) {
      this.updateUserPage = false;
      }
    });
  }
  sendToLab(itemId) {
    this._service.sendToLab(this.order_id, itemId, this.order_brand).subscribe(res => {
      this.selectedItem = itemId;
      this.status = 'lab';
    });
  }
  receiveByLab(itemId) {
    this._service.receiveByLab(this.order_id, itemId, this.order_brand).subscribe(res => {
      this.selectedItem = itemId;
      this.status = 'receiveByLab';
    });
  }
  finishedProcessing(itemId) {
    this._service.finishedProcessing(this.order_id, itemId, this.order_brand).subscribe(res => {
      this.selectedItem = itemId;
      this.status = 'finishedProcessing';
    });
  }
  receivedFromLab(itemId) {
    this._service.receivedFromLab(this.order_id, itemId, this.order_brand).subscribe(res => {
      this.selectedItem = itemId;
      this.status = 'receivedFromLab';
    });
  }

  return(itemId, reason, description) {
    this._service.return(this.order_id, itemId, this.order_brand, reason ,  description).subscribe(res => {
      this.selectedItem = itemId;
      this.status = 'return';
    });
  }
  createInternalNotes(notes) {
    this._service.createInternalNotes(this.order_id, notes.value, this.order_brand ).subscribe(res => {
      if (res.data) {
        this.internalNotes = res.data.internal_notes;
        notes.value = '';
      }
    });
  }
  checkShip(item_id, shipItem) {
    let index;
    if (shipItem.checked) {
      this.shipArray.push(item_id);
    } else {
      index = this.shipArray.indexOf(item_id);
      if (index > -1) {
      this.shipArray.splice(index, 1);
      }
    }
  }
  ship(order_id, itemId) {
    this._service.shipped(order_id, this.shipArray, this.order_brand).subscribe(res => {
      this.selectedItem = itemId;
    });
  }
}
