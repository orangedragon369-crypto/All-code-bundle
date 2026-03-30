import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-stars',
  imports: [DecimalPipe],
  template: `
    <div class="star-rating">
      @if(value != value | number: '1.0-0'){
        <span class="star half">★</span>
      }
      @for (item of [].constructor(5); track $index) {
      }
    </div>
  `,
  /*         @if(value != myNumber | number: '1.0-0'){<span class="star half">★</span>
          <span class="star filled">★★</span>*/
  styles: `
    .star-rating {
      font-size: 1.5rem;
      color: #ccc;
      margin-top: -0.5rem;
      margin-left: 1rem;
      margin-bottom: 0.5rem;
    }

    .star.filled {
      color: gold;
    }

    .star.half {
      background: linear-gradient(90deg, gold 50%, #ccc 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
})

export class Stars {
  
  value = input(0);
  atValue = 0;
}
