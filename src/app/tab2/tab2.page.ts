import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userinfo;
  constructor(private userservice: UserService, private router:Router) {}
  ngOnInit() {
    this.getUser();
  }

  logout(){
    this.userservice.logout();
    this.router.navigateByUrl('/');
  }
  getUser(){
     this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
  }
}
