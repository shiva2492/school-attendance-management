import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../providers/shared.service';
import { DatabaseService } from '../../providers/database.service';



@Component({
  selector: 'app-daily-students',
  templateUrl: './daily-students.component.html',
  styleUrls: ['./daily-students.component.css']
})
export class DailyStudentsComponent implements OnInit {
queryParams:any={};
studentsList:any = [];
  constructor(private service: SharedService,private db: DatabaseService) {

     this.service.onMenuEvent.emit(true);
     this.service.onHeaderEvent.emit(true);
     this.getStudentList();
   }


   getStudentList(){
     this.queryParams.attribute = "role";
     this.queryParams.value = "student";
    //  this.db.sizeSubject.next('student');
      this.db.queryList('users/',this.queryParams)
     .subscribe(res=>{
       //console.log("query results----",res);
       this.studentsList = res;
       console.log("query results----",this.studentsList);
    })
   }




  ngOnInit() {
  
    
  }



}
