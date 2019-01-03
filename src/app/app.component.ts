import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp02012019';
  feature = 'recipe';

  onNevigate(feature : string)
  {
    console.log('value'+feature);
    
   this.feature = feature;
  }
}
