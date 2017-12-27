import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted: any = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login(obj: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(obj);
    }else {
      console.log('error');
    }
  }
}
