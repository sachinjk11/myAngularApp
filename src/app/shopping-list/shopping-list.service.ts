import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
     
      @Output() ingredientsChanged = new Subject<Ingredient[]>();
      @Output() editing = new Subject<number>();

      getIngredients()
      {
         return this.ingredients.slice();
      }

      getIngredient(id : number)
      {
         return this.ingredients[id];
      }

    add(name : string, amount : number)
    {
        this.ingredients.push({name,amount});
        this.ingredientsChanged.next(this.ingredients.slice());
    } 
   
   

    addIngredients(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    update(index : number, newingredient : Ingredient)
    {
        this.ingredients[index] = newingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    delete(index : number)
    {
      



        const idx : number = this.ingredients.indexOf(this.getIngredient(index));
        if (idx !== -1) {
            this.ingredients.splice(idx, 1);
        }        
   

        this.ingredientsChanged.next(this.ingredients.slice());

    }
}