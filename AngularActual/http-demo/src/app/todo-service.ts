import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl :string = "https://mtech.free.beeceptor.com";
  private http = inject(HttpClient);

  getTodos() {
    return this.http.get(`${this.baseUrl}/todos`);
  }
}
