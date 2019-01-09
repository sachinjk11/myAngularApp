import { Recipe } from './recipe.model';
import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('rice',1),new Ingredient('water',2)]),
        new Recipe('B Test Recipe', 'eat healthy a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('bread',3),new Ingredient('butter',4)])
      ];

   @Output() recipeSelected = new EventEmitter<Recipe>();  

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
}
