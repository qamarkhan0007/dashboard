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
import { ProductAssestComponent } from './product-assest/product-assest.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { LookupstylesComponent } from './lookupComponent/lookupstyles/lookupstyles.component';
import { LookupFramesComponent } from './lookupComponent/lookup-frames/lookup-frames.component';
import { LookupLensComponent } from './lookupComponent/lookup-lens/lookup-lens.component';
import { LookupTemplatesComponent } from './lookupComponent/lookup-templates/lookup-templates.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StoreCreateComponent } from './store-create/store-create.component';

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
        children: [
          {
            path: '',
            component: UserComponent,
          },
          {
            path: 'details/:email',
            component: UserDetailsComponent,
          }
        ]
    },
    {
        path: 'store/:brand',
        children: [
            {
                path: '',
                component: StoreLocationComponent
            },
            {
                path: 'create',
                component: StoreCreateComponent
            },
            {
                path: ':kiosk_id',
                component: StoreUpdateComponent
            }
        ]
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
            {
                path: 'new',
                component: ProductNewComponent
            },
            {
                path: 'assests/:product_id',
                component: ProductAssestComponent
            },
            {
                path: 'collections',
                component: ProductCollectionComponent
            },
            {
                path: 'lookup/styles',
                component: LookupstylesComponent
            },
            {
                path: 'lookup/frames',
                component: LookupFramesComponent
            },
            {
                path: 'lookup/colors',
                component: LookupLensComponent
            },
            {
                path: 'lookup/maps',
                component: LookupTemplatesComponent
            },
            {
              path: ':product_id',
              component: ProductDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
