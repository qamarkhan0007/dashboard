import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
    brand: any;
    response: any;
    responseData: any;
    names: any;
    prices: any;
    template: any;
    assets: any;
    tags: any;

    constructor(private route: ActivatedRoute, private service: AppService, private router: Router) {}


    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.brand = params['pro_brand'];
        });
        this.getFrameColors();
        this.getTemplateMap();
        this.getLensColors();
        this.getNames();
        this.getTags();
        this.getAssests();
    }
    getFrameColors() {
        this.service.getFrameColors(this.brand).subscribe(res => {
            this.response = res.data;
        });
    }
    getLensColors() {
        this.service.getLensColors(this.brand).subscribe(res => {
            this.responseData = res.data;
        });
    }
    getNames() {
        this.service.getNames(this.brand).subscribe(res => {
            this.names = res.data;
        });
    }
    getTemplateMap() {
        this.service.getTemplateMap(this.brand).subscribe(res => {
            this.template = res.data;
        });
    }
    getTags() {
        this.service.getTags(this.brand).subscribe(res => {
            this.tags = res.data;
        });
    }
    getAssests() {
        this.service.getAssests(this.brand).subscribe(res => {
            this.assets = res.data;
        });
    }
    createProduct(form) {
            this.prices = {
                'prices' : {
                    'NO_LENS_PRICE': Number(form.NO_LENS),
                    'STANDARD_INDEX_LENS_PRICE': Number(form.STANDARD_INDEX_LENS),
                    'HIGH_INDEX_LENS_PRICE': Number(form.HIGH_INDEX_LENS),
                    'RX_SUN_LENS_PRICE': Number(form.RX_SUN_LENS),
                    'NON_RX_SUN_LENS_PRICE': Number(form.NON_RX_SUN_LENS),
                    'READING_LENS_PRICE': Number(form.READING_LENS),
                    'PLANO_LENS_PRICE': Number(form.PLANO_LENS),
                    'PRG_STANDARD_LENS_PRICE': Number(form.PRG_STANDARD_LENS),
                    'PRG_HIGH_INDEX_LENS_PRICE': Number(form.PRG_HIGH_INDEX_LENS),
                    'PRG_RX_SUN_LENS_PRICE': Number(form.PRG_RX_SUN_LENS),
                    'ORIGINAL_RX_PRICE': Number(form.STANDARD_INDEX_LENS_measure),
                    'ORIGINAL_SUN_PRICE': Number(form.mernonRxSunLENS)
                },
                'assets': {
                    'front-eyewear-thumb': [form.assets]
                },
                'slug': null,
                'measurements': {
                    'lens_height': Number(form.lens_heightt),
                    'bridge': Number(form.bridge),
                    'temple': Number(form.temple),
                    'lens_width': Number(form.lens_width),
                    'lens_heigh': Number(form.lens_heigh)
                },
                'tags': [form.tags],
                'lens_color': form.Lencolor.toString(),
                'name': form.selectName,
                'product_type': form.productType.toString(),
                'color': form.selectFrame,
                'legacy_product_id': form.legacyProduct,
                'product_gender': form.gender.toString(),
                'description': form.description,
                'details': form.Details,
                'social_id': form.social_id,
        };
        this.service.createProduct(this.prices, this.brand).subscribe(res => {
            if (res.data) {
                window.history.back();
            }
        });
    }
}
