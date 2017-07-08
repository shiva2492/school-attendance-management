import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { routing }  from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TopHeaderComponent } from './top-header/top-header.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './auth/register/register.component';
import {AuthService} from './auth/auth.service';

export const firebaseConfig = {
    apiKey: "AIzaSyCr4j_Vo2gnQrTYTsIwsscOSAZj3UAuoSQ",
    authDomain: "staffstudentmanager.firebaseapp.com",
    databaseURL: "https://staffstudentmanager.firebaseio.com",
    projectId: "staffstudentmanager",
    storageBucket: "staffstudentmanager.appspot.com",
    messagingSenderId: "204060934177"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuLeftComponent,
    RegisterComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
