import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DatabaseService } from '../providers/database.service';



@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
//@Output() userUpdated = new EventEmitter();
userData:any = {};
  constructor(private router: Router,private auth: AuthService,private db: DatabaseService) {

    }

  ngOnInit() {
    this.auth.getAuthData().subscribe((auth)=>{
          if(auth){
            //console.log(this.db.getList('users/'+auth.uid));
           this.db.getObject('users/'+auth.uid)
           .subscribe((user)=>{
            this.db.userList = user;
            this.userData = this.db.userList;
            // console.log('header user---',this.db.userList);
          });
          }
            return;
          //console.log('appcomponent---',auth);
        });
  }


}
