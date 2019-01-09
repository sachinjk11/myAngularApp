import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
 
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe : Recipe;
  index : number;

  constructor(private recipeService : RecipeService, private aRoute : ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.params.subscribe(
      (param : Params) => {  this.index = +param['id']});
      this.recipe = this.recipeService.getRecipe(this.index);
      console.log('service call recipe '+this.index);
  }

  
}
