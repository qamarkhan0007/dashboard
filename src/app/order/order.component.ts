import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: any;
  foundOrder: any;
  brand: any;

  constructor(private _service: AppService) { }

  ngOnInit() {
  }
  getOrders(brnd) {
    this.brand = brnd;
    this._service.getOrders(brnd).subscribe( res => {
      this.orderData =  res.data;
    });
  }
  showMeOrder(orderId) {
    this.foundOrder = this.orderData.find(x => {
      return x.order_id === orderId;
    });
    console.log('foundOrder >>>>>>>>>>>>>>>>>>', this.foundOrder);
  }

}
