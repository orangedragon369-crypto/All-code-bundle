import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <h1>Angular Lazy Workshop — Step 6 (Best Practices)</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
        <a routerLink="/admin" routerLinkActive="active">Admin</a>
      </nav>
      <button *ngIf="!auth.isLoggedIn()" (click)="auth.login()">Login</button>
      <button *ngIf="auth.isLoggedIn()" (click)="auth.logout()">Logout</button>
      <hr />
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  constructor(public auth: Auth) {}
}