import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    data: any;
    brand: any;
    token: any;
    state: any = false;
    private CurrentPageValue: any = 1;
    private selectedValue: any = 10;

    constructor(private service: AppService , private route: ActivatedRoute) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['brand'];
            this.service.getUser(this.brand).subscribe(res => {
                if (res.data) {
                    this.state = true;
                    this.data = res.data;
                }
            });
        });
    }
}
