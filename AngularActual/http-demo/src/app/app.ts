import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private todoService = inject(TodoService);

  ngOnInit(){
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
    })
  }
  protected readonly title = signal('http-demo');
}
