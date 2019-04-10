import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ingredient } from '../models/ingredient.model';
import { isNgContainer } from '@angular/compiler';
import { element } from '@angular/core/src/render3';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {

  dishName: string;
  type = 0;
  cost = 0;
  ingredients: Ingredient[] = [new Ingredient()];
  ingCount: number[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  private element(id: string) {
    return document.getElementById(id);
  }

  addFirstListItem() {
    this.ingCount.push(0);
    this.ingredients.push(new Ingredient());
    this.element('firstButtonId').classList.add('hidden');
  }

  addListItem() {
    this.element((this.ingCount.length - 1).toString()).classList.add('hidden');
    this.element('minus' + (this.ingCount.length - 1).toString()).classList.add('hidden');
    this.ingCount.push(this.ingCount.length);
    this.ingredients.push(new Ingredient());
  }

  removeListItem() {
    this.ingCount.pop();
    this.ingredients.pop();
    if (this.ingCount.length === 0) {
      this.element('firstButtonId').classList.remove('hidden');
    } else {
      this.element((this.ingCount.length - 1).toString()).classList.remove('hidden');
      this.element('minus' + (this.ingCount.length - 1).toString()).classList.remove('hidden');
    }
  }

  addNewDish() {
    this.dataService.createNewDish(this.dishName, this.cost, this.type, this.ingredients);
  }

}
