import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DataService } from '../data.service';
import { Ingredient } from '../models/ingredient.model';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-dish-modify',
  templateUrl: './dish-modify.component.html',
  styleUrls: ['./dish-modify.component.css']
})
export class DishModifyComponent implements OnInit {

  dishes: Dish[] = [];
  types: string[] = ['MAIN_COURSE', 'SOUP', 'DESSERT', 'SALAD', 'HOT_DRINK', 'COLD_DRINK'];
  type: number;
  ingCount: number[] = [];
  dish: Dish;
  valueee: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDishes().subscribe(data => {
      this.dishes = data;
    });
  }

  changeSelectedDish(id: number) {
    this.dish = Object.assign({}, this.dishes.filter(item => {
      return item.id === id;
    })[0]);
    this.type = this.types.indexOf(this.dish.type);
    this.ingCount = [];
    if (this.dish.ingredients.length > 1) {
      this.element('firstButtonId').classList.add('hidden');
    } else {
      this.element('firstButtonId').classList.remove('hidden');
    }
    for (let i = 0; i < this.dish.ingredients.length - 1; i++) {
      this.ingCount.push(i);
    }
  }

  callFunction() {
    for (let i = 0; i < this.ingCount.length - 1; i++) {
      this.element(i.toString()).classList.add('hidden');
      this.element('minus' + i.toString()).classList.add('hidden');
    }
  }

  private element(id: string) {
    return document.getElementById(id);
  }

  addFirstListItem() {
    console.log(this.dish.ingredients)
    this.ingCount.push(0);
    this.dish.ingredients.push(new Ingredient());
    this.element('firstButtonId').classList.add('hidden');
    console.log(this.dish.ingredients)
  }

  addListItem() {
    console.log(this.dish.ingredients)
    this.element((this.ingCount.length - 1).toString()).classList.add('hidden');
    this.element('minus' + (this.ingCount.length - 1).toString()).classList.add('hidden');
    this.dish.ingredients.push(new Ingredient());
    this.ingCount.push(this.ingCount.length);
    console.log(this.dish.ingredients)
    console.log(this.ingCount)
  }

  addInitialItemToList(){
    console.log("TUTAJJ")
    var ing = new Ingredient();
    ing.ingredientName= (<HTMLInputElement>document.getElementById("firstIngredientNameEmptyList")).value;
    ing.calories = Number((<HTMLInputElement>document.getElementById("firstCaloryValueEmptyList")).value);
    this.dish.ingredients.push(ing);
  }

  removeListItem() {
    this.ingCount.pop();
    this.dish.ingredients.pop();
    if (this.ingCount.length === 0) {
      this.element('firstButtonId').classList.remove('hidden');
    } else {
      this.element((this.ingCount.length - 1).toString()).classList.remove('hidden');
      this.element('minus' + (this.ingCount.length - 1).toString()).classList.remove('hidden');
    }
  }

  modifyDish() {
    this.dish.type = this.types[this.type];
    this.dataService.modifyDish(this.dish);
  }

}
