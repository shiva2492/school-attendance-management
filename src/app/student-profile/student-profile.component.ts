import { Component, OnInit } from '@angular/core';
import { SharedService } from '../providers/shared.service';
import  { DatabaseService } from '../providers/database.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
studentData:any = {};
  constructor(private service: SharedService,private db: DatabaseService,private auth: AuthService) { 
    this.service.onMenuEvent.emit(true);
     this.service.onHeaderEvent.emit(true);
  }

  ngOnInit() {
     this.auth.getAuthData().subscribe((auth)=>{
          if(auth){
            //console.log(this.db.getList('users/'+auth.uid));
           this.db.getObject('users/'+auth.uid)
           .subscribe((user)=>{
            this.db.userList = user;
            this.studentData = this.db.userList;
            console.log('student profile----',this.studentData);
          });
          }
            return;
          //console.log('appcomponent---',auth);
        });
    
    //console.log('student profile----',this.studentData);
  }

}
