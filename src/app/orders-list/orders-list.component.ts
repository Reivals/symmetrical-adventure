import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SingleOrder } from '../models/singleOrder.model';
import { Dish } from '../models/dish.model';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  clientFirstName : string;
  clientLastName : string;
  tableNumber : number;
  clientOrder : SingleOrder = new SingleOrder();
  avaliableDishes: Dish[] = [];
  selectedOption: Dish;

  constructor(private dataService: DataService) {
  
  }

  ngOnInit() {
    this.clientOrder.dishList = [];
    return this.dataService.getDishes()
    .subscribe(data => this.avaliableDishes = data); 
  }

  displayOrders(){
    return this.dataService.getClientOrders(this.clientFirstName, this.clientLastName, this.tableNumber)
    .subscribe(data => {
      this.clientOrder = data; 
    });
  }

  remove(id: any) {
    this.clientOrder.dishList.splice(id, 1);
    this.dataService.removeDishFromClientOrder(this.clientOrder.id, this.clientOrder.dishList[id]).subscribe();
  }

  addNewDish(){
    this.clientOrder.dishList.push(this.selectedOption);
    this.dataService.modifySingleOrder(this.clientOrder).subscribe();
  }

  setSelectedOption(dish : string){
     this.selectedOption = this.avaliableDishes.filter(function(item) {
      return item.dishName === dish;
    })[0];
    
  }

}
