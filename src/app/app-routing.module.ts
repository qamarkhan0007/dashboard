import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { DiscountComponent} from './discount/discount.component';
import { AppComponent } from './app.component';
import { StoreLocationComponent} from './store-location/store-location.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
