import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    data: any;

  constructor(private service: AppService) { }

  ngOnInit() {
      this.getUser();
  }

  getUser() {
      this.service.getUser()
      .subscribe(res => {
       this.data = res;
   });
}
}
