import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

public isAuthinticated:Observable<firebase.User>;
user:any;



    constructor(private af:AngularFireAuth){
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    // if (!user) {
    //     this.user = null;
    //     unsubscribe();
    // } else { 
    //     this.user = user;
    //     unsubscribe();
    // }
    // });         
       
    }

  


    signUpStaff(email: string, password: string) {

        return firebase.auth().createUserWithEmailAndPassword(email, password);

    }

    signUpStudent(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

   //username: admin#gmail.com
   //password: password     
    signIn(email: string, password: string) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    
    signOut(){
        //this.isAuthinticated = false;
        return firebase.auth().signOut();
    }

   getAuthenticated(): boolean { return this.user ? true : false; }



}