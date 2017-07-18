import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ConsoleComponent } from './console/console.component'; //import about component
import { RegisterStudentComponent } from './auth/registerStudent/registerStudent.component';
import { RegisterStaffComponent } from './auth/registerStaff/registerStaff.component';
import { ToasterComponent } from './util/toaster/toaster.component';
import { AuthGuard } from './auth/guard.service';
import { StudentBookingComponent } from './student-booking/student-booking.component';
import { StaffBookingComponent } from './staff-booking/staff-booking.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ConsoleComponent ,canActivate: [AuthGuard] },
  { path: 'registerStudent', component: RegisterStudentComponent ,canActivate: [AuthGuard]}, // redirect to home page on load
  { path: 'registerStaff', component: RegisterStaffComponent ,canActivate: [AuthGuard]},
  { path: 'studentBooking', component: StudentBookingComponent ,canActivate: [AuthGuard]},
  { path: 'staffBooking', component: StaffBookingComponent ,canActivate: [AuthGuard]}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);