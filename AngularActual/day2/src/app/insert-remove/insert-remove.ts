import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.html',
  styleUrl: './insert-remove.css',
})
export class InsertRemoveComponent {
  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }
}