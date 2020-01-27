import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private subscription: Subscription;
  public orderhistory;
  public wallet;

  constructor(private orderservice:OrderService) {}

  ngOnInit() {
    this.wallet = this.getWallet();
    this.getHistoryOrder();
  }

  getHistoryOrder(){
    this.subscription = this.orderservice.getOrderForUser().subscribe(resp => {
       this.orderhistory = resp;
       console.log(this.orderhistory);
    })
  }
  getWallet(){
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
    return userinfo['wallet'];
  }
  cancelOrder(order){
    this.orderservice.cancelOrder(order.id).subscribe(res => console.log(res));
  }

}
