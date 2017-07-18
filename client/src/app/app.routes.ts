// IMPORTS
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersDetailComponent } from './suppliers/suppliers-detail/suppliers-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsInfoComponent } from './subjects/subjects-info/subjects-info.component';
import { SubjectsMeasurementsComponent } from './subjects/subjects-measurements/subjects-measurements.component';
import { SubjectsActivityComponent } from './subjects/subjects-activity/subjects-activity.component';
import { SubjectsComponentsComponent } from './subjects/subjects-components/subjects-components.component';

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
    path: 'suppliers/:supplier_id',
    component: SuppliersComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
    // children: [
    //   {
    //     path: 'information',
    //     component: SubjectsInfoComponent
    //   },
    //   {
    //     path: 'measurements',
    //     component: SubjectsMeasurementsComponent
    //   },
    //   {
    //     path: 'activity_log',
    //     component: SubjectsActivityComponent
    //   },
    //   {
    //     path: 'components',
    //     component: SubjectsComponentsComponent
    //   }
    // ]
  },
  {
    path: 'subjects/:subject_id',
    component: SubjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
