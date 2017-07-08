import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; //import about component
import { RegisterComponent } from './auth/register/register.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent }  // redirect to home page on load
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);