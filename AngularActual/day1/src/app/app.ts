import { Component, signal } from '@angular/core';
import { MyStandaloneComponent } from './my-standalone-component/my-standalone-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('day1');
}
