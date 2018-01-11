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
    state: any = true;
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
    saved: any;
    tempArray: any = [];
    token: any;
    order_brand: any;
    order_id: any;
    internalNotes: any;
    selectedItem: any;
    status: any;

    constructor(private route: ActivatedRoute , private _service: AppService, private router: Router) {
      this.token = localStorage.getItem('token');
      console.log(this.token);
    }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        console.log(params['order_brand']);
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
        //   this.status1 = false;
        //   if (this.status1) {
        //   }else {
        //       this.itm = item_id;
        //       this.cancelStatuss = value;
        //       this.status1 = true;
        //   }
    }
    cancelItem(order_id, selectedvalue, item) {
        this._service.cancelItem(order_id, item, this.brandAfter, this.return_description, selectedvalue).subscribe(res => {
            this.responseData = res.data;
            if (res.data) {
                this.statte = true;
                this.itmId = item;
                console.log(JSON.stringify(this.responseData));
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
    }
    unshipped() {
      this.tempArray = [];
      if (this.orderDataForIterate) {
        this.orderDataForIterate.find(x => {
          if (x.status != null) {
            if (_.contains(['Lab_Finished', 'Partially_Shipped', 'Partially_Return', 'Return_Authorized',
            'Partially_Refunded', 'Refunded'], x.status)) {
              this.tempArray.push(x);
            }
          }
        });
        this.orderData = this.tempArray;
      }
    }
    updateUser(email, first, last , brand) {
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.brand1 = brand;
        this.updateUserPage = true ;
    }
    saveUser(first, last, email, marketing, brand ) {
        this.response.first_name = first;
        this.response.last_name = last;
        this.response.email = email;
        this.response.marketing_opt_in = marketing;
        this._service.saveUser(this.response, brand).subscribe(res => {
            this.saved = 'saving...';
            location.reload();
            //this.route.navigate(['']);
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
}
