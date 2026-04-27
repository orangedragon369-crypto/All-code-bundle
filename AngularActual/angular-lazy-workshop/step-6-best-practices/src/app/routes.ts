import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NotFound } from './not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'products', loadComponent: () => import('./products').then(m => m.Products), title: 'Products' },
  {
    path: 'admin',
    loadComponent: () => import('./admin').then(m => m.Admin),
    canActivate: [() => import('./auth-guard').then(m => m.authGuard)],
    title: 'Admin'
  },
  { path: '404', component: NotFound, title: '404' },
  { path: '**', redirectTo: '404' }
];