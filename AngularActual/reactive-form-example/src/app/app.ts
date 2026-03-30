import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerContactFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactive-form-example');
}
