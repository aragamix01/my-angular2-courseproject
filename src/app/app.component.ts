import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigate = 'recipe';
  navigator(navigateEvent: string) {
    this.navigate = navigateEvent;
  }
}

