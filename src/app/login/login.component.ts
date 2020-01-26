import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginservice:LoginService, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  //retrive data from form and subscribe at the request http check if the request status as 200 or return err in console 
  loginform(){
    this.loginservice.login(this.loginForm.value).subscribe(res => {
      if (res.status === 200) {
        const token = res.headers.get('authorization');
        this.userService.setUserToken(token);
        this.userService.setUser();
        this.router.navigateByUrl('/tabs/tab1');
      }
    }, err => {
      console.dir(err);
    });

  }
  register(){
    this.router.navigateByUrl('/register');
  }

}
