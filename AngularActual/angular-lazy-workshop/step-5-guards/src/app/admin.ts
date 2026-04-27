import { Component } from '@angular/core';
import { Auth } from './auth';

@Component({
  standalone: true,
  selector: 'app-admin',
  template: `
    <h2>Admin</h2>
    <p>Secret content only for logged-in users!</p>
    <button (click)="auth.logout()">Logout</button>
  `
})
export class Admin {
  constructor(public auth: Auth) {}
}