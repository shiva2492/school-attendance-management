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
   isAuthinticated:boolean;
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

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.isAuthinticated=true;
      }
      else{
      this.isAuthinticated=false;

      }


    })
 
  }


  
  title = 'app';
}
