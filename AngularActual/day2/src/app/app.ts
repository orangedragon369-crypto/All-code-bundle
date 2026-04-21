import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close';
import { InsertRemoveComponent } from './insert-remove/insert-remove';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ RouterOutlet, OpenCloseComponent, InsertRemoveComponent ],
  animations: [
    // animation triggers go here
  ]
})

export class App {
}