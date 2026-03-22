import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MySecondComponent } from './my-second-component/my-second-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MySecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
