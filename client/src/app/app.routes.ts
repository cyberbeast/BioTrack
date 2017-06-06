// IMPORTS
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersDetailComponent } from './suppliers/suppliers-detail/suppliers-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';

// ROUTE CONFIGURATION
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
