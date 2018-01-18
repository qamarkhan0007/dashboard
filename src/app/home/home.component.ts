import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any;
  show: any = false;
  hide: any = false;
  upcData: any;
  reportUpc: any = false;
  msg: any;
  file: any;
  constructor(private route: Router , private _service: AppService) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getAllbatches();
  }
  createUpc(batchName, file) {
    console.log('>>>>>>>>>>>>>crete', batchName);
    console.log('>>>>>>>>>>>>>crete', file);
    this._service.createUpc(batchName, file).subscribe(res => {
      console.log('>>>>>>>>>>>>', res.data);
      if (res.data === 200) {
        this.show = false;
      }
    });
  }
  getAllbatches() {
    this._service.getAllbatches()
    .subscribe(res => {
      this.upcData = res.data;
      console.log('>>>>>>>>>>>.batch name', this.upcData);
    });
  }
  getReportUpc(batch) {
    let that;
    this._service.getReport(batch).subscribe(res => {
        this.reportUpc = true;
        this.msg = 'Ok';
        this.hide = false;
    });
    that = this;
    setTimeout(function () {
      that.reportUpc = false;
  }, 2000);
    return false;
  }



}
