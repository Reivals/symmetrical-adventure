import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedDishes: Dish[];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.currentOrderDishes.subscribe(orderedDishes => this.orderedDishes = orderedDishes);
  }

  finalizeOrders() {
    console.log(this.orderedDishes);
  }


}
