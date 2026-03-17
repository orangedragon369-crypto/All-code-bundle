import { Component } from '@angular/core';

@Component({
  selector: 'app-my-standalone-component',
  imports: [],
  templateUrl: './my-standalone-component.html',
  styleUrl: './my-standalone-component.scss',
})

export class MyStandaloneComponent {
  works = false;
}