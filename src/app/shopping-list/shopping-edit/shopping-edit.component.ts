import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("name") nameRef : ElementRef;
  @ViewChild("amount") amountRef : ElementRef;

  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit() {
  }

  onAdd()
  {
    console.log(this.nameRef.nativeElement.value+'=='+this.amountRef.nativeElement.value);
    
    this.ShoppingService.add(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
  }
}
