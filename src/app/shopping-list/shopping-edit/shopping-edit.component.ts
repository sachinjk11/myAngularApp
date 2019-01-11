import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  edtisubcription : Subscription;
  editMode : boolean = false;
  editIndex : number;
  editIngredient : Ingredient;
  @ViewChild('f') editform : NgForm;
  
  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit() {

    this.edtisubcription =  this.ShoppingService.editing.subscribe(
      (index : number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editIngredient = this.ShoppingService.getIngredient(index);
        this.editform.setValue({
          name : this.editIngredient.name,
          amount : this.editIngredient.amount,
        });
      }
    );

  }

  onAdd(form : NgForm)
  {
    if(this.editMode)
      this.ShoppingService.update(this.editIndex, {name : form.value.name, amount : form.value.amount});
    else
      this.ShoppingService.add(form.value.name, form.value.amount);

      this.restForm();
  }

  ngOnDestroy()
  {
    this.edtisubcription.unsubscribe();
  }

  restForm()
  {
    this.editMode = false;
    this.editform.reset();
  }

  onDelete()
  {
    
    if(this.editMode)
    {
      this.ShoppingService.delete(this.editIndex);
      console.log(this.editIndex);
    }
    else
       console.log("please selete item");
    this.restForm();     

  }

}
