import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  mySubscription : Subscription

  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingService.getIngredients();
  
    this.mySubscription = this.ShoppingService.ingredientsChanged.subscribe((ingredientsData : Ingredient[]) => {
      this.ingredients = ingredientsData;
    });
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }

}
