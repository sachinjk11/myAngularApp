import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoute : Routes = [
{path:'', component : RecipesComponent, pathMatch:'full'},
{path:'recipes', component: RecipesComponent, children:
[
    {path: '',    component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent},
]},
{path:'shoppingList', component: ShoppingListComponent},
];  

@NgModule({
    imports : [RouterModule.forRoot(appRoute)],
    exports : [RouterModule]
})
export class appRoutingModule 
{

}