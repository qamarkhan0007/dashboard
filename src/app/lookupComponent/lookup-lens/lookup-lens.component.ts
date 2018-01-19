import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookup-lens',
  templateUrl: './lookup-lens.component.html',
  styleUrls: ['./lookup-lens.component.css']
})
export class LookupLensComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private Service: AppService) { }
  brand: any;
  lensData: any;
  frameDataValues: any;
  updateData: any;
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.brand = params['pro_brand'];
    });
    this.getLensColor();
  }

  getLensColor() {
    this.Service.getLensColors(this.brand).subscribe((res: any) => {
      if (res.code === 200) {
        this.lensData = res.data;
      }
    });
  }
  createLensColor(name, active) {
    this.frameDataValues = {
      'name': name,
      'active_flag': active,
    };
    this.Service.createLensColor(this.brand, this.frameDataValues).subscribe((res: any) => {
      if (res.code === 200) {
        this.getLensColor();
      }
    });
  }
  save(id, name, active_flag) {
    this.updateData = {
      'name': name,
      'active_flag': active_flag,
    };
    this.Service.updateLens(this.brand, this.updateData, id).subscribe((res: any) => {
      if (res.code === 200) {
        this.getLensColor();
      }
    });
  }
}
