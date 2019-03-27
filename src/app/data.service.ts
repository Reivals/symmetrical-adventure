import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from './models/dish.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAllDishesUrl = 'http://localhost:8080/api/getAllDishes';
  createSingleOrder = 'http://localhost:8080/api/TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'

  private orderedDishes = new BehaviorSubject<Dish[]>([]);
  currentOrderDishes = this.orderedDishes.asObservable();

  constructor(private _http: HttpClient) { }

  changeOrderList(orders: Dish[]){
    this.orderedDishes.next(orders);
  }

  getDishes(){
    return this._http.get<Dish[]>(this.getAllDishesUrl);
  }

}
