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
  removeDishFromOrderUrl = 'http://localhost:8080/api/removeDishFromOrder'
  modifySingleOrderUrl = 'http://localhost:8080/api/modifySingleOrder'

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
      alert('Order was created succesfully!');
    },
    error => {
      console.log("sth went wrong");
    }); 
  }

  getClientOrders(clientName, clientSurname, tableNumber){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };
      return this._http.get<SingleOrder>(this.getClientOrderUrl+'/'+clientName+'/'+clientSurname+'/'+tableNumber, options);
  }

  removeDishFromClientOrder(id : number, dish: Dish){
      console.log(this.removeDishFromOrderUrl+'/'+id+'/'+dish.id);
      return this._http.delete(this.removeDishFromOrderUrl+'/'+id+'/'+dish.id);
  }

  modifySingleOrder(singleOrder : SingleOrder){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };
    return this._http.put(this.modifySingleOrderUrl, singleOrder);
    
  }


}
