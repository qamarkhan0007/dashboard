import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  brand: any;
  email: any;
  token: any;
  foundUser: any;
  userOrder: any;
  updateUserPage: any = false;
  resetMsg: any = false;
  firstName: any;
  lastName: any;
  userEmail: any;

  constructor(private service: AppService , private route: ActivatedRoute, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.email = params['email'];
      this.brand = params['brand'];
    });
    this.showUser();
  }

  showUser() {
    this.service.showUser(this.email, this.brand).subscribe(res => {
      this.foundUser = res.data;
    });
    this.service.getOrdersByUsers(this.brand, this.email).subscribe(res => {
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

}
