import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToasterComponent } from '../app/util/toaster/toaster.component';
import { AuthService } from './auth/auth.service';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
   @ViewChild(ToasterComponent) toaster: ToasterComponent;  
   
   public isAuthinticated: boolean = false;

    constructor(private auth: AuthService,private af:AngularFireAuth,private service: SharedService){
    //setInterval( () => { console.log(this.toaster.getToasterConfig()) },2000);
   // this.auth.initializeFirebase();

     if(auth.user)
      this.isAuthinticated = true;
     else
      this.isAuthinticated = false;
      console.log('user----',auth.user);
      console.log('authenticated---',this.isAuthinticated)
      this.service.onMainEvent.subscribe(
      (onMain) => {
         this.isAuthinticated = onMain;
      }
   );
   }

  ngOnInit(){
    

    // firebase.auth().onAuthStateChanged(user=>{
    //   if(user){
    //     this.isAuthinticated=true;
    //   }
    //   else{
    //   this.isAuthinticated=false;

    //   }


    // })
 
  }

  logoutHappened(){
    this.auth.signOut();
    this.isAuthinticated = false;
    console.log('logout'); 
  }

}
