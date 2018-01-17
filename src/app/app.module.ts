import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppService} from './app.service';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {SelectModule} from 'angular2-select';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoreLocationComponent } from './store-location/store-location.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiscountComponent } from './discount/discount.component';
import { LetterPressComponent } from './letter-press/letter-press.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';
import { SendErpComponent } from './send-erp/send-erp.component';
import { OrderHtkComponent } from './order-htk/order-htk.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductAssestComponent } from './product-assest/product-assest.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { LookupstylesComponent } from './lookupComponent/lookupstyles/lookupstyles.component';
import { LookupFramesComponent } from './lookupComponent/lookup-frames/lookup-frames.component';
import { LookupLensComponent } from './lookupComponent/lookup-lens/lookup-lens.component';
import { LookupTemplatesComponent } from './lookupComponent/lookup-templates/lookup-templates.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    StoreLocationComponent,
    NavbarComponent,
    DiscountComponent,
    LetterPressComponent,
    OrderComponent,
    InventoryComponent,
    SendErpComponent,
    OrderHtkComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductNewComponent,
    ProductNavbarComponent,
    ProductCollectionComponent,
    ProductAssestComponent,
    StoreUpdateComponent,
    LookupstylesComponent,
    LookupFramesComponent,
    LookupLensComponent,
    LookupTemplatesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
