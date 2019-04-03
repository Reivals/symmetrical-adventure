import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  clientFirstName : string;
  clientLastName : string;
  tableNumber : number;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  displayOrders(){
    this.dataService.getClientOrders(this.clientFirstName, this.clientLastName, this.tableNumber);
  }
}
