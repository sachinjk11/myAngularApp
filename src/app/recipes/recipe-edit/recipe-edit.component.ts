import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index : number;
  editMode : boolean;
  rcepieForm : FormGroup;

  constructor(private aRoute : ActivatedRoute, private recepieService : RecipeService) { }

  ngOnInit() {

    this.aRoute.params.subscribe(
      (param : Params) => {
        this.index = param['id'];
        this.editMode = param['id'] != null;
        console.log('edit mode = '+this.editMode);

        this.initForm();
        
      }
    );
  }

  initForm()
  {
    let rname = ''; let rdescription = ''; let rimagePath = ''; 
    let ringredients = new FormArray([]);
    if(this.editMode)
    {
      var recipe = this.recepieService.getRecipe(this.index);
      rname = recipe.name;
      rdescription = recipe.description;
      rimagePath = recipe.imagePath;

      if(recipe.ingredients)
      {
          for(let ingredient of recipe.ingredients)
          {
            ringredients.push(
              new FormGroup({
                'name' : new FormControl(ingredient.name, Validators.required),
                'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
              })
            );
          }
      }
    }

    this.rcepieForm = new FormGroup({
     'name' : new FormControl(rname, Validators.required),
     'imagePath' : new FormControl(rimagePath, Validators.required),
     'desc' : new FormControl(rdescription, Validators.required),
    'ingredients' : ringredients

    });
  }


  onSubmit()
  {
    console.log(this.rcepieForm);

    if(this.editMode)
        this.recepieService.update(this.index, this.rcepieForm.value);
    else
      this.recepieService.add( this.rcepieForm.value);

  }

  onDelete()
  {
    this.recepieService.delete(this.index);
  }

  getControls() {
    return (<FormArray>this.rcepieForm.get('ingredients')).controls;
  }

  addingredients()
  {
    (<FormArray>this.rcepieForm.get('ingredients')).push(
      new FormGroup({
        'name' :  new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
      })
    );
  }

  onCancel()
  {
    
  }

}
