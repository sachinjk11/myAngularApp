import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingService.getIngredients();
    this.ShoppingService.ingredientsChanged.subscribe((ingredientsData : Ingredient[]) => {
      this.ingredients = ingredientsData;
    });
  }

}
