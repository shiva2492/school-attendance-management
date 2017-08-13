import { Component, OnInit } from '@angular/core';   
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { SharedService } from '../../providers/shared.service';
import { DatabaseService } from '../../providers/database.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './registerStudent.component.html',
  styleUrls: ['./registerStudent.component.css']
})
export class RegisterStudentComponent implements OnInit {
  
  studentForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  username:FormControl;
  isFormSubmit:boolean;
  isPasswordMatch:boolean=true;
  schoolname:FormControl;
  grade:FormControl;
  gender:FormControl;
  contactnumber:FormControl;
  parent_firstname:FormControl;
  parent_lastname:FormControl;
  parent_email:FormControl;
  parent_contactnumber:FormControl;
  parent_secphonenumber:FormControl;
  role:FormControl ;
  toasterInstance: any;
  reqPayload:any={};

  constructor(private authService: AuthService, public router: Router, private toasterService: ToasterService,private service: SharedService,private db: DatabaseService) {
    
    this.createStudentFormControls();
    this.createStudentFormGroup();
    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(true);
  
  }

  ngOnInit() {
 
  }

  onStudentRegister() {
  let myThis=this;
  
  //this.reqPayload = this.studentForm;
  this.reqPayload.firstname = this.firstname.value;
  this.reqPayload.lastname = this.lastname.value;
  this.reqPayload.username = this.username.value;
  this.reqPayload.email = this.email.value;
  this.reqPayload.contactnumber = this.contactnumber.value;
  this.reqPayload.parent_firstname = this.parent_firstname.value;
  this.reqPayload.parent_lastname = this.parent_lastname.value;
  this.reqPayload.parent_email = this.parent_email.value;
  this.reqPayload.parent_contactnumber = this.parent_contactnumber.value;
  this.reqPayload.parent_secphonenumber = this.parent_secphonenumber.value;
  this.reqPayload.role = 'student';
  this.reqPayload.schoolname = this.schoolname.value;
  this.reqPayload.grade = this.grade.value;
  this.reqPayload.gender = this.gender.value;
  //console.log(this.reqPayload)
  
  // if(this.password.value!=this.confirmPassword.value){
  //   this.isPasswordMatch=false;
  //   return;
  // }

   if(this.studentForm.valid && this.isPasswordMatch){
    this.authService.signUpStudent(this.email.value, this.password.value)
      .then(function (user) {
        myThis.db.setList('users/'+user.uid,myThis.reqPayload).then((res)=>{
          console.log('student registered ----',res);
          myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Student is successfully registered..!');
          myThis.router.navigate(['']);
        },(err)=>{
          console.log(err);
        })
        .catch((err)=>{
          console.log(err);
           myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Student');
        })
      
      }).catch(function (error) {
        console.log(error);
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Student');
      });
  }

  }

  createStudentFormControls(){
    
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.username=new FormControl('',Validators.required);
    this.confirmPassword=new FormControl('');
    this.schoolname = new FormControl('');
    this.grade = new FormControl('');
    this.gender = new FormControl('');
    this.contactnumber = new FormControl('');
    this.parent_firstname = new FormControl('');
    this.parent_lastname = new FormControl('');
    this.parent_email = new FormControl('');
    this.parent_contactnumber = new FormControl('');
    this.parent_secphonenumber = new FormControl('');
    this.role  = new FormControl('');

  }

  createStudentFormGroup(){
   this.studentForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      username: this.username,
      confirmPassword:this.confirmPassword,
      schoolname : this.schoolname,
      grade : this.grade,
      gender : this.gender,
      contactnumber : this.contactnumber,
      parent_firstname : this.parent_firstname,
      parent_lastname : this.parent_lastname,
      parent_email : this.parent_email,
      parent_contactnumber : this.parent_contactnumber,
      parent_secphonenumber : this.parent_secphonenumber,
      role : this.role
  });
  }

  
  

}
