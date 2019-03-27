import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../models/dish.model';
@Component({
  selector: 'menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  dishes: Dish[] = [];
  orders: Dish[] = [];
  constructor(private dataService: DataService, private router:Router) {

  }

  @Output() finializeOrderEvent = new EventEmitter<Dish>();

  ngOnInit(){
    return this.dataService.getDishes()
    .subscribe(data => this.dishes = data); 
  }

  addToOrder(dish){
    this.orders.push(dish);
    this.finializeOrderEvent.emit();
  }
}
