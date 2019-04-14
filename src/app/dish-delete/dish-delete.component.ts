import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dish-delete',
  templateUrl: './dish-delete.component.html',
  styleUrls: ['./dish-delete.component.css']
})
export class DishDeleteComponent implements OnInit {

  dishes: Dish[] = [];
  id = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDishes().subscribe(data => {
      this.dishes = data;
    });
  }

  deleteDish() {
    this.dataService.deleteDish(this.id);
  }

}
