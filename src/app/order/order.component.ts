import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    orderData: any;
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
    itmId: any = true;
    response: any;
    getcustomerStatus: any = false;
    checkMe: any = false;

    constructor(private route: ActivatedRoute , private _service: AppService) { }

    ngOnInit() {
    }
    getOrders(brand) {
        this.brandAfter = brand;
        this._service.getOrders(brand).subscribe( res => {
            this.orderData =  res.data;
        });
    }
    showMeOrder(orderId) {
        console.log('>>>>>>>>>>>>show me order >>>>>>>>>>>>>>>>>');
        this.foundOrder = this.orderData.find(x => {
            return x.order_id === orderId;
        });
        this.items = this.foundOrder.items.eyewear.items ;
        console.log('foundOrder >>>>>>>>>>>>>>>>>>', this.foundOrder);
        console.log('foundOrder >>>>>>>>>>>>>>>>>>', this.items);
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
        console.log(this.itm, this.cancelStatuss);
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
                this.itmId = false;
            }
        });
    }
    getCustomer(email) {
        this.getcustomerStatus = true;
        this.checkMe = true;
        this._service.getCustomerByEmail(email, this.brandAfter).subscribe(res => {
            this.response = res.data;
        });
    }
}
