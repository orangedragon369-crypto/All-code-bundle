import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products',
  template: `
    <h2>Products</h2>
    <p>This is the Products page. In Step 2 we will convert this route to be lazy loaded.</p>
    <ul>
      <li>Product A</li>
      <li>Product B</li>
      <li>Product C</li>
    </ul>
  `
})
export class Products {}