import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { routing }  from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guard.service';
import { SharedService } from './providers/shared.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myComponents, myDirectives, myPipes } from './primtivesList';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { DatabaseService } from './providers/database.service';
import { CalenderComponent } from './calender/calender.component';
import { AddCalenderEventComponent } from './calender/add-calender-event/add-calender-event.component';
import { Http,HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { MyDatePickerModule } from 'mydatepicker';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import {DataTableModule} from "angular2-datatable";
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DailyStudentsComponent } from './staff/daily-students/daily-students.component';
import { ExamCalenderComponent } from './staff/exam-calender/exam-calender.component';
import { NewLeaveSystemComponent } from './staff/notices/new-leave-system/new-leave-system.component';


@NgModule({
  declarations: [
    AppComponent,
    ...myComponents,// array spread ... operator
    ...myDirectives,// remove new component from here and place them in primitiveList.ts
    ...myPipes, CalenderComponent, AddCalenderEventComponent, StudentProfileComponent, DailyStudentsComponent, ExamCalenderComponent, NewLeaveSystemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    NKDatetimeModule,
    LocalStorageModule.withConfig({
          prefix: 'my-app',
          storageType: 'localStorage'
      }),
    DataTableModule
  ],
  providers: [AuthService,AuthGuard,SharedService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
