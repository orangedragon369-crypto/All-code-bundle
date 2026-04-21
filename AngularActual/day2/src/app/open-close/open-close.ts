import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  standalone: true, // This is the new syntax!
  templateUrl: './open-close.html',
  styleUrls: [ './open-close.css' ]
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}