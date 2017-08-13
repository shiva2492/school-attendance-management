import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToasterComponent } from '../app/util/toaster/toaster.component';
import { AuthService } from './auth/auth.service';
import { SharedService } from './providers/shared.service';
import { DatabaseService } from './providers/database.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
   @ViewChild(ToasterComponent) toaster: ToasterComponent;  
   
   public isAuthinticated: boolean = false;
   public Currentroute: boolean = false;
   
    constructor(private auth: AuthService,private service: SharedService,private db :DatabaseService){

      // console.log('authenticated---',this.isAuthinticated)
      this.service.onMenuEvent.subscribe(
      (onMenu) => {
        console.log('app event subscribed----');
         this.isAuthinticated = onMenu;
         //this.Currentroute = onHeader; 
      });

      this.service.onHeaderEvent.subscribe(
      (onHeader) => {
        console.log('app event subscribed----');
         //this.isAuthinticated = onMenu;
         this.Currentroute = onHeader; 
      });

   }

  ngOnInit(){

    if(window.location.pathname != '/login')
     this.Currentroute = true; 

   // console.log('app constructor----',this.Currentroute);
    this.auth.getAuthData().subscribe((auth)=>{
          if(auth){
            //console.log(this.db.getList('users/'+auth.uid));
           this.db.getList('users/'+auth.uid)
           .subscribe((user)=>{
            this.db.userList = user;
            //console.log(this.db.userList);
          });
          }
            return;
          //console.log('appcomponent---',auth);
        });


    
  
    
  }


}
