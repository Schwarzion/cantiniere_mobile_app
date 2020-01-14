import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private userservice: UserService, private router:Router) {}

  logout(){
    this.userservice.logout();
    this.router.navigateByUrl('/');
  }
}
