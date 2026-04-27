import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-not-found',
  template: `
    <h2>404 — Not Found</h2>
    <p>The page you requested could not be found.</p>
  `
})
export class NotFound {}