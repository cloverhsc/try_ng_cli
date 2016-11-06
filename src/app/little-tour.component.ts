import { Component } from '@angular/core';

@Component({
  selector: 'little-tour',
  templateUrl: 'little-tour.component.html',
})
export class LittleTourComponent {
  heroes = ['Clover', 'Hsu', 'Xi-Jie'];

  addHero(newHero: string) {
      if (newHero) {
         this.heroes.push(newHero);
      }
  }
}
