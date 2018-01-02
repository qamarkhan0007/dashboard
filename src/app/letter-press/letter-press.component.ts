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
    save: any;
    commonTemplate: any;
    getOneCommontemplate: any;
    Prewiew: any;
    name1: any;
    getOrderValue: any;
    constructor(private service: AppService , private route: ActivatedRoute) { }

    ngOnInit() {
        console.log('in ng o it >>>>>>>');
        this.getAllEmailTemplate();
        this.getCommonEmailTemplates();
    }

    getAllEmailTemplate() {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.findTemplates(this.brand).subscribe(res => {
                this.getAllEmailTemplate = res.data;
            });
        });
    }

    getEmailTemplate(name) {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.findOneTemplate(name,  this.brand).subscribe(res => {
                this.getOnetemplate = res.data;
                this.template = true;
            });
        });
    }

    getOneCommonEmailTemplate(common) {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.findOneCommonTemplate(common,  this.brand).subscribe(res => {
                this.getOneCommontemplate = res.data;
                this.commonTemplate = true;
            });
        });
    }

    getCommonEmailTemplates() {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.findCommonTemplate(this.brand).subscribe(res => {
                this.getCommonEmailTemplates = res.data;
            });
        });
    }


    updateTemplate(subject, from_name, from_email, text, html, name) {
        this.save = 'Saving...';
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.updateTemplate(subject, from_name, from_email, text, html, this.brand, name).subscribe(res => {
                this.save = 'Saved !';
            });
        });
    }

    updateCommonTemplate(content, name) {
        this.save = 'Saving...';
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.updateCommonTemplate(content , this.brand , name).subscribe(res => {
                if (res) {
                    this.save = 'Saved !';
                }
            });
        });
    }
    toPrewiew(name) {
        this.name1 = name;
        console.log('>>>>>>>>>>>>>>>>>> name', typeof this.name1);
        this.Prewiew = true;
    }
    gettemp(name) {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            console.log('welcome_Email-----------------', name);
            this.service.findOneTemplate(name,  this.brand).subscribe(res => {
                this.getOnetemplate = res.data;
                this.getOrderValue = true;
            });
        });
    }


}
