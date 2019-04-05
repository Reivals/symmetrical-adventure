import { Ingredient } from './ingredient.model';

export class Dish {
    id: number;
    dishName: string;
    ingredients: Ingredient[]; 
    type: string;
}