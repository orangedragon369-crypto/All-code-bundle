import { Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close';
import { InsertRemoveComponent } from './insert-remove/insert-remove';


export const routes: Routes = [
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'insert-remove', component: InsertRemoveComponent },
  { path: '**', component: OpenCloseComponent },
];