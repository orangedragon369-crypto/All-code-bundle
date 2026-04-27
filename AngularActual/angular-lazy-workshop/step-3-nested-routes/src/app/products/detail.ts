import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products-detail',
  template: `
    <h3>Product Detail</h3>
    <p>Details for product with id: {{ id }}</p>
  `
})
export class ProductsDetail {
  id = (new URLSearchParams(window.location.search).get('id')) || 'n/a';
  // Note: for a proper Angular route param read use ActivatedRoute; kept
  // minimal here to stay beginner-friendly and avoid deep router code.
}