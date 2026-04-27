import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'app-products',
  template: `
    <h2>Products (Nested)</h2>
    <nav>
      <a routerLink="/products/list" routerLinkActive="active">List</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class Products {}