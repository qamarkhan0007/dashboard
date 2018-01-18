import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit {

  brand: any;
  collectionData: any;
  constructor(private route: ActivatedRoute , private service: AppService, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.brand = params['pro_brand'];
    });
    this.getCollections();
  }

  getCollections() {
    this.service.getCollections(this.brand).subscribe(res => {
      console.log('>>>>>>>>>>>>>', res.data);
      this.collectionData = res.data;
    });
  }
}
