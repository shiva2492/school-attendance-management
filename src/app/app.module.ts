import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guard.service';
import { SharedService } from './shared.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myComponents, myDirectives, myPipes } from './primtivesList';
import { AppComponent } from './app.component';


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
    ...myComponents,// array spread ... operator
    ...myDirectives,
    ...myPipes
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
  providers: [AuthService,AuthGuard,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
