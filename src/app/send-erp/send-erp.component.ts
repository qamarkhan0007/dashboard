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
    distat: any ;
  constructor(private route: ActivatedRoute, private _service: AppService) { }

  ngOnInit() {
      this.distat = false;
      this.route.params.subscribe((params: Params) => {
          this.brand = params['brand'];
  });
  }
  ErpSend(select, perform, payload) {
      this._service.ErpSend(select.value, perform.value, payload.value, this.brand).subscribe(res => {
          this.erpData = res.data;
          this.distat = 'true';
      });
      payload.value = '';
      perform.value = '';
  }
  }
