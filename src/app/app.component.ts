import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { ToasterComponent } from '../app/util/toaster/toaster.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 @ViewChild(ToasterComponent) toaster: ToasterComponent;
 
    constructor(){
    //setInterval( () => { console.log(this.toaster.getToasterConfig()) },2000);
    
    }

  ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyCh-jT1pzTDSeIPtHhLlZFFv8b1UyraE10",
    authDomain: "ssms-57461.firebaseapp.com",
    databaseURL: "https://ssms-57461.firebaseio.com",
    projectId: "ssms-57461",
    storageBucket: "ssms-57461.appspot.com",
    messagingSenderId: "645121434486"

    })
      // const rootRef = firebase.database().ref();  
      // const oneRef = rootRef.child('students').child('1');
      // oneRef.once('value').then(function(snapshot) {
      // console.log('retrieve child data---',snapshot.val());  
      // })
      
  }


  
  title = 'app';
}
