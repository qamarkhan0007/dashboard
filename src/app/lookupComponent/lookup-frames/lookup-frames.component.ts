import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lookup-frames',
    templateUrl: './lookup-frames.component.html',
    styleUrls: ['./lookup-frames.component.css']
})
export class LookupFramesComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private Service: AppService) { }
    brand: any;
    frameData: any;
    frameDataValues: any;
    updateData: any;
    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.brand = params['pro_brand'];
        });
        this.getFrameColor();
    }

    getFrameColor() {
        this.Service.getFrameColors(this.brand).subscribe((res: any) => {
            if (res.code === 200) {
                this.frameData = res.data;
            }
        });
    }
    createFrameColor(name, active) {
        this.frameDataValues = {
            'name': name,
            'active_flag': active,
        };
        this.Service.createFrameColor(this.brand, this.frameDataValues).subscribe((res: any) => {
            if (res.code === 200) {
                this.getFrameColor();
            }
        });
    }
    save(id, name, active_flag) {
        this.updateData = {
            'name': name,
            'active_flag': active_flag,
        };
        this.Service.updateFrame(this.brand, this.updateData, id).subscribe((res: any) => {
            if (res.code === 200) {
                this.getFrameColor();
            }
        });

    }
}
