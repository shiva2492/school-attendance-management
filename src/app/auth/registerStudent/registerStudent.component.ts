import { 
       Component, 
       OnInit 
      } from '@angular/core';
      
import { 
     AuthService 
   } from '../auth.service';

import {   
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';

import { 
  Router 
} from '@angular/router';

import { 
  ToasterComponent 
} from '../../util/toaster/toaster.component';

import { 
  ToasterModule, 
  ToasterService, 
  ToasterConfig 
} from 'angular2-toaster';

import { 
    SharedService 
  } from '../../shared.service';

 import{
StudentConstants
 } from '../../config';  

@Component({
  selector: 'app-register-student',
  templateUrl: './registerStudent.component.html',
  styleUrls: ['./registerStudent.component.css']
})
export class RegisterStudentComponent implements OnInit {
  
  studentForm:FormGroup;
  firstName:FormControl;
  lastName:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  userName:FormControl;
  isFormSubmit:boolean;
  isPasswordMatch:boolean=true;
  toasterInstance: any;
  schools:String[];
  grades:String[];
  relationships:String[];

  constructor(private authService: AuthService, public router: Router, private toasterService: ToasterService,private service: SharedService) {

    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(true);
    this.schools=StudentConstants.schools;
    this.grades=StudentConstants.grades;
    this.relationships=StudentConstants.relationships;

  }

  ngOnInit() {
  this.createStudentFormControls();
  this.createStudentFormGroup();
  }

  onStudentRegister() {
  let myThis=this;
  this.isFormSubmit=true;

   if(this.studentForm.valid && !this.confirmPassword.errors){
    this.authService.signUpStudent(this.email.value, this.password.value)
      .then(function (user) {
        myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Student is successfully registered..!');
        myThis.router.navigate(['']);
      }).catch(function (error) {
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Student');
      });
  }

  }

  createStudentFormControls(){
    
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.userName=new FormControl('',Validators.required);
    this.confirmPassword=new FormControl('');

  }

  createStudentFormGroup(){
   this.studentForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      userName: this.userName,
      confirmPassword:this.confirmPassword
    });
  }

  
  

}
