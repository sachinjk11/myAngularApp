import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
     
      @Output() ingredientsChanged = new Subject<Ingredient[]>();

      getIngredients()
      {
         return this.ingredients.slice();
      }

    add(name : string, amount : number)
    {
        this.ingredients.push({name,amount});
        this.ingredientsChanged.next(this.ingredients.slice());
    } 
   
    delete(name : string)
    {
        
    } 

    addIngredients(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}