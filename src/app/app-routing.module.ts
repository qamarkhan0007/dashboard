import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { DiscountComponent} from './discount/discount.component';
import { LetterPressComponent } from './letter-press/letter-press.component';
import { AppComponent } from './app.component';
import { StoreLocationComponent} from './store-location/store-location.component';
import { InventoryComponent} from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';
import { SendErpComponent} from './send-erp/send-erp.component';
import { OrderHtkComponent} from './order-htk/order-htk.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user/:brand',
        component: UserComponent
    },
    {
        path: 'store/:brand',
        component: StoreLocationComponent
    },
    {
        path: 'discount/:brand',
        component: DiscountComponent
    },
    {
      path: 'letterpress/:brand',
      component: LetterPressComponent
  },
  {
      path: 'inventory/:brand',
      component: InventoryComponent
  },
  {
      path: 'orders/:group',
      component: OrderComponent
  },
  {
      path: 'sendErp/:brand',
      component: SendErpComponent
  },
  {
      path: 'orderhtk',
      component: OrderHtkComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
