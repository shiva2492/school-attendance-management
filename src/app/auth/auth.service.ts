import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

public isAuthinticated:Observable<firebase.User>;;
user:any;

    constructor(private af:AngularFireAuth){
      
    //   firebase.initializeApp({
    //   apiKey: "AIzaSyCh-jT1pzTDSeIPtHhLlZFFv8b1UyraE10",
    //   authDomain: "ssms-57461.firebaseapp.com",
    //   databaseURL: "https://ssms-57461.firebaseio.com",
    //   projectId: "ssms-57461",
    //   storageBucket: "ssms-57461.appspot.com",
    //   messagingSenderId: "645121434486"

    // });
    
    firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.user = user;
            //return this.isAuthinticated=user;
            }
            else{
                this.user = null;
            //return this.isAuthinticated = null;

            }
        })

    }
    // initializeFirebase(){
    //     firebase.initializeApp({
    //   apiKey: "AIzaSyCh-jT1pzTDSeIPtHhLlZFFv8b1UyraE10",
    //   authDomain: "ssms-57461.firebaseapp.com",
    //   databaseURL: "https://ssms-57461.firebaseio.com",
    //   projectId: "ssms-57461",
    //   storageBucket: "ssms-57461.appspot.com",
    //   messagingSenderId: "645121434486"

    //   })
    // }

    signUpStaff(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            error => console.log(error)
            )

    }

    signUpStudent(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    
    signOut(){
        //this.isAuthinticated = false;
        return firebase.auth().signOut();
    }

   isAuthenticated(){

    // this.isAuthinticated = this.af.authState;
    // console.log('isautheticated----',this.isAuthinticated);
    if(this.user)
        return true;
    else
        return false;    
      
    }

    // isAuthenticatedChange(){
    //     firebase.auth().onAuthStateChanged(user=>{
    //         if(user){
    //         return this.isAuthinticated=true;
    //         }
    //         else{
    //         return this.isAuthinticated=false;

    //         }
    //     })
    // }



}