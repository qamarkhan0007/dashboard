import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-htk',
  templateUrl: './order-htk.component.html',
  styleUrls: ['./order-htk.component.css']
})
export class OrderHtkComponent implements OnInit {
  token: any;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
  }

}
