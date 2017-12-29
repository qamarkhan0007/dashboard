import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
