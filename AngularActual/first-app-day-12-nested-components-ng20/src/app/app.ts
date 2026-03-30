import {Component, inject} from '@angular/core';
import {Home} from './home/home';
import {Router, RouterModule} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [
        Home,
        RouterModule
    ],
    template: `
        <main>
            <header class="brand-name">
                <a [routerLink]="['/']"> 
                    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"/>
                </a>
                <button 
                        class="primary"
                        type="button"
                        (click)="houseOfTheWeek()"
                >
                    House of the week
                </button>
                <button 
                        class="content"
                        (click)="back()"
                >
                    Back
                </button>
            </header>
            <section class="content">
                <router-outlet></router-outlet>
            </section>
        </main>
    `,
    styleUrls: ['./app.css'],
})
export class App {
    title = 'homes';
    router = inject(Router);
    location = inject(Location);

    houseOfTheWeek() {
        this.router.navigate(['/details', 6]);
    }

    back() {
        this.location.back();
    }
}
