import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Products } from './products';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'products', component: Products, title: 'Products' },
  { path: '**', redirectTo: '' }
];