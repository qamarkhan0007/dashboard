import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    data: any;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;

  constructor(private service: AppService) { }

  ngOnInit() {
      this.getUser();
  }

  getUser() {
      console.log('cureent page >>>>>>>', this.CurrentPageValue);
      this.service.getUser()
      .subscribe(res => {
       this.data = res.data;
   });
}
}
