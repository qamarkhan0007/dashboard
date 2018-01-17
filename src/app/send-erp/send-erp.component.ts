import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-erp',
  templateUrl: './send-erp.component.html',
  styleUrls: ['./send-erp.component.css']
})
export class SendErpComponent implements OnInit {
    brand: any;
    erpData: any;
    distat: any = false;
    token: any;
  constructor(private route: ActivatedRoute, private _service: AppService) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.brand = params['brand'];
  });
  }
  ErpSend(select, perform, payload) {
      let that: any;
      this._service.ErpSend(select.value, perform.value, payload.value, this.brand).subscribe(res => {
          this.erpData = res.data;
          this.distat = true;
          window.scroll(0, 0);
      });
      payload.value = '';
      perform.value = '';
      that = this;
      setTimeout(function () {
        that.distat = false;
    }, 2000);
      return false;
  }
  }
