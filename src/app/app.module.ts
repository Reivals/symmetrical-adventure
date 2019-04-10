import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { OrderComponent } from './order/order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';
import { MenuListComponent } from './menu-list/menu-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { DishCreateComponent } from './dish-create/dish-create.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    MenuListComponent,
    OrdersListComponent,
    DishCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
