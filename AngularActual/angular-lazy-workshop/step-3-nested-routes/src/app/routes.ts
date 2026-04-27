import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  {
    path: 'products',
    loadComponent: () => import('./products').then(m => m.Products),
    title: 'Products',
    children: [
      { path: 'list', loadComponent: () => import('./products/list').then(m => m.ProductsList), title: 'Products List' },
      { path: ':id', loadComponent: () => import('./products/detail').then(m => m.ProductsDetail), title: 'Product Detail' }
    ]
  },
  { path: '**', redirectTo: '' }
];