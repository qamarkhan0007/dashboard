import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    submitted: any = false;
    response: any ;
    constructor(private formBuilder: FormBuilder , private _service: AppService , private route: Router) { }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    login(obj: any) {
        this.submitted = true;
        if (this.loginForm.valid) {
            this._service.authLogin(obj)
            .subscribe(res => {
                localStorage.setItem('token', JSON.stringify(res.data));
                this.route.navigate(['/home']);
            });
        }
    }
}
