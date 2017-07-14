import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToasterComponent } from '../app/util/toaster/toaster.component';
import { AuthService } from './auth/auth.service';
import { SharedService } from './shared.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
   @ViewChild(ToasterComponent) toaster: ToasterComponent;  
   
   public isAuthinticated: boolean;

    constructor(private auth: AuthService,private af:AngularFireAuth,private service: SharedService){
    //setInterval( () => { console.log(this.toaster.getToasterConfig()) },2000);
   // this.auth.initializeFirebase();

     
       console.log('app constructor----');
      // console.log('authenticated---',this.isAuthinticated)
      this.service.onMainEvent.subscribe(
      (onMain) => {
        console.log('app event subscribed----');
         this.isAuthinticated = onMain;
      });
   }

  ngOnInit(){
       console.log('app ngonit----');
    
    this.af.authState.map(auth => {
            if (!(auth)) {
              console.log('app authstate false----');              
            this.isAuthinticated = false;
          } else {
            console.log('app authstate false----');
            this.isAuthinticated = true;
            }
        });
  }

  logoutHappened(){
    this.auth.signOut();
    this.isAuthinticated = false;
    console.log('logout'); 
  }

}
