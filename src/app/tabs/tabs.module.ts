import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "../login/login.component";
import {OrderComponent} from "../order/order.component";
import { TabsPageRoutingModule } from './tabs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';
import { GuardService } from '../services/guard.service';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TabsPage, LoginComponent, OrderComponent, RegisterComponent],
  providers: [GuardService]
})
export class TabsPageModule {}
