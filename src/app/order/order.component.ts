import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedDishes: Dish[];
  clientFirstName: string;
  clientLastName: string;
  tableNumber: number;
  constructor(private dataService: DataService) {

  }

  ngOnInit(){
    this.dataService.currentOrderDishes.subscribe(orderedDishes => this.orderedDishes = orderedDishes)
  }

  finalizeOrders(){
    this.dataService.createSingleOrder(this.clientFirstName, this.clientLastName, this.tableNumber, this.orderedDishes);
    this.orderedDishes=[];
    this.dataService.currentOrderDishes=new BehaviorSubject<Dish[]>([]);
    this.clientFirstName='';
    this.clientLastName='';
  }
  

}
