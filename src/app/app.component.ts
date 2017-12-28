import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loginForm: FormGroup;
  error: any;
  constructor(private formBuilder: FormBuilder , private _service: AppService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login(obj: any) {
    if (this.loginForm.valid) {
      console.log(obj);
      this._service.authLogin(obj);
    }else {
      console.log('error');
      this.error = true;
    }
  }
}
