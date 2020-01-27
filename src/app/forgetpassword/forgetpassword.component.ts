import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {
  email: string ="";
  constructor(private router:Router, private loginservice:LoginService) { }

  ngOnInit() {}

  returnLogin(){
     this.router.navigateByUrl('/');
  }
  submit(){
    this.loginservice.forgerpassword(this.email).subscribe(res => console.log(res));
    this.router.navigateByUrl('/');
  }

}
