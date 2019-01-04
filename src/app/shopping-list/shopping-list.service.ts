import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';

export class ShoppingService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
     
      @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

      getIngredients()
      {
         return this.ingredients.slice();
      }

    add(name : string, amount : number)
    {
        this.ingredients.push({name,amount});
        this.ingredientsChanged.emit(this.ingredients.slice());
    } 
   
    delete(name : string)
    {
        
    } 

    addIngredients(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}