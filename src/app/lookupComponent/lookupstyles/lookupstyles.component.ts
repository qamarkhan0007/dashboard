import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookupstyles',
  templateUrl: './lookupstyles.component.html',
  styleUrls: ['./lookupstyles.component.css']
})
export class LookupstylesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private Service: AppService) { }
  brand: any;
  styleData: any;
  frameDataValues: any;
  updateData: any;
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.brand = params['pro_brand'];
    });
    this.getstyleColor();
  }

  getstyleColor() {
    this.Service.getNames(this.brand).subscribe((res: any) => {
      if (res.code === 200) {
        this.styleData = res.data;
      }
    });
  }
  createstyles(name, active) {
    this.frameDataValues = {
      'name': name,
      'active_flag': active,
    };
    this.Service.createstyles(this.brand, this.frameDataValues).subscribe((res: any) => {
      if (res.code === 200) {
        this.getstyleColor();
        name = '';
      }
    });
  }
  updateStyle(id, name, active_flag) {
    this.updateData = {
      'name': name,
      'active_flag': active_flag,
    };
    this.Service.updateStyle(this.brand, this.updateData, id).subscribe((res: any) => {
      if (res.code === 200) {
        this.getstyleColor();
      }
    });
  }
}
