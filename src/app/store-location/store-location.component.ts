import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.css']
})
export class StoreLocationComponent implements OnInit {
  data: any;
  private CurrentPageValue: any = 1;
  private selectedValue: any = 10;
  index: any = 1;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.getStores();
  }
  getStores() {
      this.service.getStores()
      .subscribe(res => {
        console.log('cureent page >>>>>>>', res.data);
       this.data = res.data;
   });
}

}
