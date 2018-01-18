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
    foundUser: any;
    userOrder: any;
    updateUserPage: any = false;
    resetMsg: any = false;
    firstName: any;
    lastName: any;
    userEmail: any;
    response: any;
    saved: any;
    order: any = 'first_name';
    reverse: any = false;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;
    private arrLenght: any;

    constructor(private service: AppService , private route: ActivatedRoute, private router: Router) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.userBrand = params['brand'];
        });
        console.log(this.userBrand);
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
    showUser(email) {
      this.service.showUser(email, this.brand).subscribe(res => {
          this.foundUser = res.data;
      });
      this.service.getOrdersByUsers(this.brand, email).subscribe(res => {
          this.userOrder = res.data;
      });
    }
    updateUser(email, first, last) {
      this.firstName = first;
      this.lastName = last;
      this.userEmail = email;
      this.updateUserPage = true;
    }
    saveUser(first, last, email, marketing ) {
      this.foundUser.first_name = first;
      this.foundUser.last_name = last;
      this.foundUser.email = email;
      this.foundUser.marketing_opt_in = marketing;
      this.service.saveUser(this.foundUser, this.brand).subscribe(res => {
        this.updateUserPage = false;
      });
    }
    cancel() {
      this.updateUserPage = false;
    }
    resetPassword(email) {
      let that;
      this.service.resetPassword(email, this.brand).subscribe(res => {
        this.resetMsg = true;
        that = this;
        setTimeout(function () {
          that.resetMsg = false;
        }, 2000);
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
    console.log(this.order);
  }
}
