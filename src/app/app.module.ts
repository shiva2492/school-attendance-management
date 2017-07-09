import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { routing }  from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TopHeaderComponent } from './top-header/top-header.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterStudentComponent } from './auth/registerStudent/registerStudent.component';
import {AuthService} from './auth/auth.service';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterComponent } from './util/toaster/toaster.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCh-jT1pzTDSeIPtHhLlZFFv8b1UyraE10",
    authDomain: "ssms-57461.firebaseapp.com",
    databaseURL: "https://ssms-57461.firebaseio.com",
    projectId: "ssms-57461",
    storageBucket: "ssms-57461.appspot.com",
    messagingSenderId: "645121434486"
  };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuLeftComponent,
    RegisterStudentComponent,
    TopHeaderComponent,
    ToasterComponent
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
    BrowserAnimationsModule
  ],
  providers: [AuthService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
