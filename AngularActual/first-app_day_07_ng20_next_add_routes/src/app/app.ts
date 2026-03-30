import {Component, inject} from '@angular/core';
import {Home} from './home/home';
import {Router, RouterModule} from "@angular/router"; // Add this

@Component({
    selector: 'app-root',
    imports: [
        Home,
        RouterModule // Add this
    ],
    template: `
      <main>
          <header class="brand-name">
            <a [routerLink]="['/']"> <!-- <-- Add this -->
                  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"/>
            </a>
            <button
          </header>
          <section class="content">
              <router-outlet></router-outlet> <!-- <-- Replace this -->
          </section>
      </main>
  `,
    styleUrls: ['./app.css'],
})
export class App {
    title = 'homes';

    router = inject(Router);

    houseOfTheWeek() {
      this.router.navigate(['/details', 6]);
    }
}