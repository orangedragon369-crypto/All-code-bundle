import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-products-list',
  template: `
    <h3>Products List</h3>
    <ul>
      <li><a [routerLink]="'/products/1'">Product 1</a></li>
      <li><a [routerLink]="'/products/2'">Product 2</a></li>
      <li><a [routerLink]="'/products/3'">Product 3</a></li>
    </ul>
  `
})
export class ProductsList {}