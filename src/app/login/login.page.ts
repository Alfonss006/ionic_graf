import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder ,
              public _user: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)])
    }) 
  }

  login(){    
    this._user.login(this.loginForm.get('email').value , this.loginForm.get('password').value)
    this._router.navigateByUrl('/');
  }

  registro(){
    this._router.navigateByUrl('/registro')
  }
}
