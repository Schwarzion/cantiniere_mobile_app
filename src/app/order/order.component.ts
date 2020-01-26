import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  order;
  userInfo;

  constructor(private orderservice:OrderService, private router:Router) { }

  ngOnInit() {
    this.getOrder();
    this.getUserInfo();
    
  }
  public getImg(image: any) {
    return `${environment.apiUrl}/img/meal/${image.label}.png`;
  }
  getOrder(){
    this.order = JSON.parse(localStorage.getItem('menuOrder'));
    console.log(this.order);
  }
  valideOrder(){
    let username = JSON.parse(localStorage.getItem('userinfo'));
    let id = username['id'];

    const test = {
      constraintId: -1,
      menuId: this.order.id,
      quantityMeals: 1,
      userId: id
    };
    console.log(test);
    this.orderservice.putOrder(test).subscribe(res => {
      if (res.id) {
        console.log(res);
      }
    },
    err => console.dir(err));
    this.router.navigateByUrl('/tabs/tab1');
  }

  public getUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userinfo'));
  }
}
