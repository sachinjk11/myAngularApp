import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index : number;
  editMode : boolean;

  constructor(private aRoute : ActivatedRoute) { }

  ngOnInit() {

    this.aRoute.params.subscribe(
      (param : Params) => {
        this.index = param['id'];
        this.editMode = param['id'] != null;
        console.log('edit mode = '+this.editMode);
        
      }
    );
  }

}