import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from './models/dish.model';
import { BehaviorSubject } from 'rxjs';
import { SingleOrder } from './models/singleOrder.model';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAllDishesUrl = 'http://localhost:8080/api/getAllDishes';
  createOrderUrl = 'http://localhost:8080/api/createNewOrder'
  getClientOrderUrl = 'http://localhost:8080/api/getClientOrder'

  private orderedDishes = new BehaviorSubject<Dish[]>([]);
  currentOrderDishes = this.orderedDishes.asObservable();

  constructor(private _http: HttpClient) { }

  changeOrderList(orders: Dish[]){
    this.orderedDishes.next(orders);
  }

  getDishes(){
    return this._http.get<Dish[]>(this.getAllDishesUrl);
  }

  createSingleOrder(firstName, lastName, tableNumber, dishList){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };

    this._http.post(this.createOrderUrl, JSON.stringify({
      clientFirstName: firstName,
      clientLastName: lastName,
      tableNumber : tableNumber,
      dishList : dishList
    }), options).subscribe(
    data => {
      alert('ok');
    },
    error => {
      console.log("sth went wrong");
    }); 
  }

  getClientOrders(clientName, clientSurname, tableNumber){
      return this._http.get<Dish[]>(this.getClientOrderUrl+'/'+clientName+'/'+clientSurname+'/'+tableNumber);
  }

}
