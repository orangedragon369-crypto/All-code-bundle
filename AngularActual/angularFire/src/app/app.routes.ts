// src/app/app.routes.ts
import { Routes } from '@angular/router';
import {CompanyEdit} from './company/company-edit/company-edit';
import {CompanyList} from './company/company-list/company-list';

export const routes: Routes = [
  { path: 'company/all', component: CompanyList },
  { path: 'company/:id', component: CompanyEdit, title: 'Edit Company' }, // <-- parameter
  { path: '**', redirectTo: 'company/all' }
];
