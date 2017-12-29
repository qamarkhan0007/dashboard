import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { AppComponent } from './app.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
