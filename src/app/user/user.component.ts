import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
//import {AppRoutingModule} from '../app-routing.module';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    data: any;
    brand: any;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;

  constructor(private service: AppService , private route: ActivatedRoute) { }

  ngOnInit() {
      this.getUser();
  }

  getUser() {
      this.route.params.subscribe((params: Params) => {
        this.brand = params['brand'];
      this.service.getUser(this.brand)
      .subscribe(res => {
       this.data = res.data;
       });
   });
}
}
