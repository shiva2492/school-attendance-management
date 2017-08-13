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
import { LiveFeedbackComponent } from './live-feedback/live-feedback.component';
import { CalenderComponent } from './calender/calender.component';
import { AddCalenderEventComponent } from './calender/add-calender-event/add-calender-event.component';
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { DailyStudentsComponent } from './staff/daily-students/daily-students.component';
import { NewLeaveSystemComponent } from './staff/notices/new-leave-system/new-leave-system.component';
import { ExamCalenderComponent } from './staff/exam-calender/exam-calender.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ConsoleComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}},
  { path: 'registerStudent', component: RegisterStudentComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}}, // redirect to home page on load
  { path: 'registerStaff', component: RegisterStaffComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}},
  { path: 'studentBooking', component: StudentBookingComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}},
  { path: 'staffBooking', component: StaffBookingComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}},
  { path: 'livefeedback', component: LiveFeedbackComponent ,canActivate: [AuthGuard],data: {roles: ['admin']}},
  { path: 'calendar', component: CalenderComponent ,canActivate: [AuthGuard],data: {roles: ['student']}},
  { path: 'profile', component: StudentProfileComponent ,canActivate: [AuthGuard],data: {roles: ['student']}},
  { path: 'dailyStudent', component: DailyStudentsComponent ,canActivate: [AuthGuard],data: {roles: ['teacher']}},
  { path: 'examCalender', component: ExamCalenderComponent ,canActivate: [AuthGuard],data: {roles: ['teacher']}},
  { path: 'newLeaveSystem', component: NewLeaveSystemComponent ,canActivate: [AuthGuard],data: {roles: ['teacher']}}
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);