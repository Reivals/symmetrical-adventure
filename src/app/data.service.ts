import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from './models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/api/getAllDishes';

  constructor(private _http: HttpClient) { }

  getDishes(){
    return this._http.get<Dish[]>(this.apiUrl);
  }

}
