import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ConsoleComponent } from './console/console.component'; //import about component
import { RegisterStudentComponent } from './auth/registerStudent/registerStudent.component';
import { ToasterComponent } from './util/toaster/toaster.component';
import { AuthGuard } from './auth/guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ConsoleComponent ,canActivate: [AuthGuard] },
  { path: 'registerStudent', component: RegisterStudentComponent }, 
  { path: 'toaster', component: ToasterComponent }  // redirect to home page on load

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);