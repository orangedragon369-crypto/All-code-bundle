import {Component, input, output} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {RouterLink} from "@angular/router";
import {Stars} from "../stars/stars";

@Component({
  selector: 'app-housing-location',
    imports: [
        RouterLink,
        Stars
    ],
  template: `
      <section class="listing">
          <img
                  class="listing-photo"
                  [src]="housingLocation().photo"
                  alt="Exterior photo of {{ housingLocation().name }}"
                  crossorigin
          />
          <button class="primary hide" (click)="hideHome()">Hide</button> <!-- TODO: Implement this button -->
          <h2 class="listing-heading">{{ housingLocation().name }}</h2>
          <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
          <app-stars [housingLocation().starValue]="housingLocation().starValue"></app-stars> <!-- TODO: Implement this nested component -->
          <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
      </section>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
  homeHidden = output<number>();

  hideHome(){
    this.homeHidden.emit(this.housingLocation().id);
  }
}
