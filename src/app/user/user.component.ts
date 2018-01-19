import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any;
  brand: any;
  userBrand: any;
  token: any;
  state: any = false;
  order: any = 'first_name';
  reverse: any = false;
  private CurrentPageValue: any = 1;
  private selectedValue: any = 10;
  private arrLenght: any = 0;

  constructor(private service: AppService , private route: ActivatedRoute, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userBrand = params['brand'];
    });
    this.getUser();
  }

  getUser() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
      this.service.getUser(this.brand).subscribe(res => {
        if (res.data) {
          this.state = true;
          this.data = res.data;
        }
      });
    });
  }

  countMe(count) {
    this.arrLenght = count;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
