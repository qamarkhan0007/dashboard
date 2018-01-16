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
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';

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
        children: [
            {
                path: '',
                component: LetterPressComponent
            },
            {
                path: 'child/:elem',
                component: LetterPressComponent
            }
        ]
    },
    {
        path: 'inventory/:brand',
        component: InventoryComponent
    },
    {
        path: 'orders/:group',
        children: [
          {
            path: '',
            component: OrderComponent
          },
        {
          path: ':order_brand/processing',
          component: OrderComponent
        }
      ]
    },
    {
        path: 'sendErp/:brand',
        component: SendErpComponent
    },
    {
        path: 'orderhtk',
        component: OrderHtkComponent
    },
    {
        path: 'home/product/:pro_brand',
        children: [
            {
                path: '',
                component: ProductComponent
            },
            // {
            //     path: 'details/:product_id',
            //     component: ProductDetailComponent
            // },
            {
                path: 'new',
                component: ProductNewComponent
            },
            {
                path: 'collections',
                component: ProductCollectionComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
