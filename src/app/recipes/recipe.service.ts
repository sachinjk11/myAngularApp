import { Recipe } from './recipe.model';
import {  Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService
{
   @Output() recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('rice',1),new Ingredient('water',2)]),
        new Recipe('B Test Recipe', 'eat healthy a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('bread',3),new Ingredient('butter',4)])
      ];



   constructor(private shoppingService :ShoppingService ){}

    public getRecipes()
    {
        return this.recipes.slice();
    }  
    public getRecipe(index : number)
    {
        return this.recipes.slice()[index];
    } 

    public addIngredients(ingredients : Ingredient[])
    {
        this.shoppingService.addIngredients(ingredients);
    }

    add(recipe : Recipe)
    {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    update(index : number,recipe : Recipe)
    {
        this.recipes[index] = recipe; 
        this.recipesChanged.next(this.recipes.slice());
    }

    delete(index : number)
    {
        const idx : number = this.recipes.indexOf(this.getRecipe(index));
        if (idx !== -1) {
            this.recipes.splice(idx, 1);
        }        
        this.recipesChanged.next(this.recipes.slice());
    }
}
