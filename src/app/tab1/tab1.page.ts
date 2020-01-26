import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private cardHebdos;
  private cardDay;
  private subscription: Subscription;
  private userInfo: any;
  private dateInfo: any;




  constructor(private menuService: MenuService, private router:Router) { }

  ngOnInit() {
    this.getMenuWeekList();
    this.getMenuTodayList();
    this.getUserInfo();

  }

  //get all menu for the week
  public getMenuWeekList() {
    this.subscription = this.menuService.getMenuWeekList().subscribe(resp => {
      this.cardHebdos = resp;
      console.log(this.cardHebdos);
      console.log(Date);
    });
  }

  public getMenuTodayList() {
    this.subscription = this.menuService.getMenuTodayList().subscribe(resp => {
      this.cardDay = resp;
      console.log(this.cardDay)
    })
  }


  //set user info in the class
  public getUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userinfo'));
  }

  //getImage menu for slide
  public getImg(image: any) {
    return `${environment.apiUrl}/img/meal/${image.label}.png`;
  }

  public getDateInfo(dateInfo: any) {
    return `${dateInfo}`;

  }
  public order(menu){
    localStorage.setItem('menuOrder', JSON.stringify(menu));
    this.router.navigateByUrl('/order');
  }

}
