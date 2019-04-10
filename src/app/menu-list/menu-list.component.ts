import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../models/dish.model';
import { Ingredient } from '../models/ingredient.model';
@Component({
  selector: 'menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, DoCheck {

  dishes: Dish[] = [];
  orders: Dish[] = [];
  dishCount: number[] = [];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.currentOrderDishes.subscribe(orderedDishes => this.orders = orderedDishes);
    return this.dataService.getDishes()
      .subscribe(data => this.dishes = data);
  }

  ngDoCheck() {
    for (const i of this.dishes) {
      this.dishCount.push(0);
    }
  }

  addToOrder(dish, index) {
    this.orders.push(dish);
    this.dishCount[index]++;
  }

  removeFromOrder(dish, index) {
    if (this.dishCount[index] > 0) {
      this.orders.splice(this.orders.lastIndexOf(dish), 1);
      this.dishCount[index]--;
    }
  }

}
