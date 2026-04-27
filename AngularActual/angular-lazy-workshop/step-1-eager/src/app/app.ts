import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header>
      <h1>Angular Lazy Workshop — Step 1 (Eager)</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
      </nav>
      <hr />
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {}