import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: any;

  constructor(private _service: AppService) { }

  ngOnInit() {
  }
  getOrders(brand) {
    this._service.getOrders(brand).subscribe( res => {
      this.orderData =  res.data;
      console.log('>>>>>>>>>>>>>>>', this.orderData);
    });
  }

}
