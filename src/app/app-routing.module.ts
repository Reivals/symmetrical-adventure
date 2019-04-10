import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { DishCreateComponent } from './dish-create/dish-create.component';

const routes: Routes = [
  { 
    path: 'order', 
    component: OrderComponent
  },
  {
    path: '',
    component: MenuListComponent
  },
  {
    path: 'orderModification',
    component: OrdersListComponent
  },
  {
    path: 'newDish',
    component: DishCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
