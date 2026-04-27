import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';

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
  { path: '**', redirectTo: '' }
];