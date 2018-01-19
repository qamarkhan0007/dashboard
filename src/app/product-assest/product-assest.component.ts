import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-assest',
  templateUrl: './product-assest.component.html',
  styleUrls: ['./product-assest.component.css']
})
export class ProductAssestComponent implements OnInit {
  brand: any;
  assestsData: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['pro_brand'];
    });
    this.getAssests();
  }
  getAssests() {
    this.service.getAssests(this.brand).subscribe(res => {
      this.assestsData = res.data;
    });
  }

}
