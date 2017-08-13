import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../providers/database.service';
var config = { 
        apiKey: "AIzaSyCh-jT1pzTDSeIPtHhLlZFFv8b1UyraE10",
        authDomain: "ssms-57461.firebaseapp.com",
        databaseURL: "https://ssms-57461.firebaseio.com",
        projectId: "ssms-57461",
        storageBucket: "ssms-57461.appspot.com",
        messagingSenderId: "645121434486"
     };
var SignUpApp = firebase.initializeApp(config, "Secondary");


@Injectable()
export class AuthService {

public isAuthinticated:Observable<firebase.User>;
user:any;


    constructor(public af:AngularFireAuth){ 

      }

    signUpStaff(email: string, password: string) {

        return SignUpApp.auth().createUserWithEmailAndPassword(email, password);

    }

    signUpStudent(email: string, password: string) {

        return SignUpApp.auth().createUserWithEmailAndPassword(email, password);
    }

   //username: admin@gmail.com
   //password: password     
    signIn(email: string, password: string) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    
    signOut(){
        //this.isAuthinticated = false;
        return firebase.auth().signOut();
    }

    // Since firebase logs in the sign up this method will log them out
    logOutSignUpUser(){
        return SignUpApp.auth().signOut();
    }

   getAuthenticated(): boolean {
        
        return this.user ? true : false; 
    }

    getAuthData(){
       return  this.af.authState.map(auth => {
            if (!(auth)) 
                return false;
            else
                return auth; 
        });
       
    }

    // getCurrentUser(){
    //      let auth = this.getAuthData().subscribe(res=>{return res});
    // }


}