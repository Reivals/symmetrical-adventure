import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SingleOrder } from '../models/singleOrder.model';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  clientFirstName : string;
  clientLastName : string;
  tableNumber : number;
  clientOrder : SingleOrder;

  constructor(private dataService: DataService) {
  
  }

  ngOnInit() {
  }

  displayOrders(){

    return this.dataService.getClientOrders(this.clientFirstName, this.clientLastName, this.tableNumber)
    .subscribe(data => {
      this.clientOrder = data; 
    });
  }

  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'xDDD', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.personList.splice(id, 1);
  }


  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
