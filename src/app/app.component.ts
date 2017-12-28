import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AppService} from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: any;
  constructor(private route: Router) {
    this.token = localStorage.getItem('token');
  }
  ngOnInit() {}
  logout() {
     localStorage.removeItem('token');
     this.token = localStorage.getItem('token');
  }
}
