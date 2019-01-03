import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<String>();
  feature = "recipe";
   
  constructor() { }

  ngOnInit() {
  }

  nevigate(feature : string)
  {
      this.featureSelected.emit(feature);
  }
}
