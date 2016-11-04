import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HandSome of Hero';
  heroes = [
      new Hero(1, 'Clover'),
      new Hero(2, 'Hsc'),
      new Hero(3, 'Hsu'),
      new Hero(4, 'Xi-Jie Hsu')
  ];
  myHero = this.heroes[0];
}
