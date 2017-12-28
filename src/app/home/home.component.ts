import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any;
  constructor(private route: Router) {
      this.token = localStorage.getItem('token');
      console.log('//////////////', this.token);
  }

  ngOnInit() {
  }
  logout() {
     localStorage.removeItem('token');
     this.token = localStorage.getItem('token');
     console.log('.>>>>>>>>>>', this.token);
     this.route.navigate(['/login']);
  }

}
