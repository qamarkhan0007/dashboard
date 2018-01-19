import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookup-templates',
  templateUrl: './lookup-templates.component.html',
  styleUrls: ['./lookup-templates.component.css']
})
export class LookupTemplatesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private Service: AppService) { }
  brand: any;
  TemplateData: any;
  frameDataValues: any;
  updateData: any;
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.brand = params['pro_brand'];
    });
    this.getTemplates();
  }

  getTemplates() {
    this.Service.getTemplateMap(this.brand).subscribe((res: any) => {
      if (res.code === 200) {
        this.TemplateData = res.data;
      }
    });
  }
  createTemplates(name, active) {
    this.frameDataValues = {
      'name': name,
      'active_flag': active,
    };
    this.Service.createTemplates(this.brand, this.frameDataValues).subscribe((res: any) => {
      if (res.code === 200) {
        this.getTemplates();
      }
    });
  }
  updateTemplate(id, name, active_flag) {
    this.updateData = {
      'name': name,
      'active_flag': active_flag,
    };
    this.Service.updateTemplateMap(this.brand, this.updateData, id).subscribe((res: any) => {
      if (res.code === 200) {
        this.getTemplates();
      }
    });
  }
}
