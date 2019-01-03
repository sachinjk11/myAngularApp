import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('B Test Recipe', 'eat healthy a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() recipeshow = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onClick(recipeSelect : Recipe)
  {
    console.log("log 2");
    console.log(recipeSelect);
    this.recipeshow.emit(recipeSelect);
  }
}
