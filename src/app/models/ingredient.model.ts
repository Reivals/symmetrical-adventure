export class Ingredient {

    ingredientName: string;
    calories: number;
    type: string;

    constructor(ingredientName: string, calories: number, type: string){
        this.ingredientName = ingredientName;
        this.calories = calories;
        this.type = type;
    }

}
