import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-letter-press',
  templateUrl: './letter-press.component.html',
  styleUrls: ['./letter-press.component.css']
})
export class LetterPressComponent implements OnInit {
template: any;
getOnetemplate: any;
brand: any;
  constructor(private service: AppService , private route: ActivatedRoute) { }

  ngOnInit() {
  }
getEmailTemplate(name) {
  this.route.params.subscribe((params: Params) => {
  this.brand = params['brand'];
  console.log('this.brand>>>>>>>>>>>', this.brand);
  console.log('get email templates', name);
  this.service.findOneTemplate(name,  this.brand).subscribe(res => {
      this.getOnetemplate = res.data;
      console.log('MMMMMMMMMMMMMMMM', this.getOnetemplate);
      this.template = true;
    });
  });
}
}
