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
    .subscribe(response => {
      this.clientOrder = response; 
    }, error => { // second parameter is to listen for error
      console.log("Invalid data passed");
      alert("There is no such order!");
  });
  }

  remove(id: any) {
    console.log(id);
    console.log(this.clientOrder.dishList[id]);
    this.dataService.removeDishFromClientOrder(this.clientOrder.id, this.clientOrder.dishList[id]).subscribe();
    this.clientOrder.dishList.splice(id, 1);
  }

  addNewDish(){
    this.clientOrder.dishList.push(this.selectedOption);

  }

  setSelectedOption(dish : string){
     this.selectedOption = this.avaliableDishes.filter(function(item) {
      return item.dishName === dish;
    })[0];
  }

  modifyClientSingleOrder(){
    this.dataService.modifySingleOrder(this.clientOrder).subscribe();
    alert('Your order was succesfully modified!');
  }

}
