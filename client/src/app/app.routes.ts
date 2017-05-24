// IMPORTS
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
