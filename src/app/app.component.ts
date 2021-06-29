import { Component } from '@angular/core';
import { statistique } from './models/Statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSU';

  voiture1 = new statistique("Mercedes", 340, 47);
  voiture2 = new statistique("Audi", 320, 32);
}
