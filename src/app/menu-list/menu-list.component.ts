import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
export class MenuListComponent implements OnInit {

  dishes: Dish[] = [new Dish(1, 'Tofucznica', [new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo')]),
  new Dish(2, 'Tofucznica', [new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo')]),
  new Dish(3, 'Tofucznica', [new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo')]),
  new Dish(4, 'Tofucznica', [new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo')]),
  new Dish(5, 'Tofucznica', [new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo'), new Ingredient('Tofu', 150, 'Warzywo')])];
  orders: Dish[] = [];
  realOrders: [Dish, number][] = [];
  constructor(private dataService: DataService, private router: Router) {
    
  }

  ngOnInit() {
    this.dataService.currentOrderDishes.subscribe(orderedDishes => this.orders = orderedDishes)
    return this.dataService.getDishes()
      .subscribe(data => this.dishes = data);
  }

  addToOrder(dish) {
    this.orders.push(dish);
  }
}
