import { Ingredient } from './ingredient.model';

export class Dish {

    id: number;
    dishName: string;
    ingredients: Ingredient[];

    constructor(id: number, dishName: string, ingredients: Ingredient[]) {
        this.id = id;
        this.dishName = dishName;
        this.ingredients = ingredients;
    }

}
