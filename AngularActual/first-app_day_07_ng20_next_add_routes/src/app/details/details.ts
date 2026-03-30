import {
    Component,
    inject // <-- Add this
} from '@angular/core';
import {ActivatedRoute} from "@angular/router"; // <-- Add this

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works! 
        {{ housingLocationId }} <!-- <-- Add this -->
    </p>
  `,
  styles: ``
})
export class Details {
    // Add the following:
    route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }
}