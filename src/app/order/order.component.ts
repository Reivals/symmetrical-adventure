import { Component, OnInit } from '@angular/core';
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

  ngOnInit(){
    return this.dataService.getDishes()
    .subscribe(data => this.orderedDishes = data); 
  }

  recieveMessage($event){
    this.orderedDishes = $event;
    console.log(this.orderedDishes);
  }
  

}
