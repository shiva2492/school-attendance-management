import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../providers/shared.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { DatabaseService } from '../../providers/database.service';


@Component({
  selector: 'app-register-staff',
  templateUrl: './registerStaff.component.html',
  styleUrls: ['./registerStaff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  
  toasterInstance: any;
  staffForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  username:FormControl;
  isFormSubmit:boolean;
  isPasswordMatch:boolean=true;
  gender:FormControl;
  contactnumber:FormControl;
  status:FormControl;
  jobtype:FormControl;
  bankname:FormControl;
  bankaccountnumber:FormControl;
  NRIC:FormControl;
  role:FormControl ;
  reqPayload:any={};
  constructor(private authService: AuthService,private service: SharedService,public router: Router, private toasterService: ToasterService,private db: DatabaseService) {
      this.service.onMenuEvent.emit(false);
      this.service.onHeaderEvent.emit(true);
      this.toasterInstance = new ToasterComponent(toasterService);
      this.createStaffFormControls();
      this.createStaffFormGroup();
   }

  ngOnInit() {
  }

    onStaffRegister() {
    let myThis = this;
    this.reqPayload.firstname = this.firstname.value;
    this.reqPayload.lastname = this.lastname.value;
    this.reqPayload.username = this.username.value;
    this.reqPayload.email = this.email.value;
    this.reqPayload.contactnumber = this.contactnumber.value;
    this.reqPayload.bankname = this.bankname.value;
    this.reqPayload.bankaccountnumber = this.bankaccountnumber.value;
    this.reqPayload.NRIC = this.NRIC.value;
    this.reqPayload.role = 'teacher';
    this.reqPayload.status = this.status.value;
    this.reqPayload.jobtype = this.jobtype.value;
    this.reqPayload.gender = this.gender.value;



  if(this.staffForm.valid && this.isPasswordMatch){
    this.authService.signUpStaff(this.email.value, this.password.value)
      .then(function (user) {
        myThis.authService.logOutSignUpUser();
        myThis.db.setList('users/'+user.uid,myThis.reqPayload).then((res)=>{
          console.log('staff registered ----',res);
          myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Staff is successfully registered..!');
          myThis.router.navigate(['']);
        },(err)=>{
          console.log(err);
           myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Staff');
        })

      }).catch(function (error) {
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Staff');
      });
  }

  }

  createStaffFormGroup(){
   this.staffForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      username: this.username,
      confirmPassword:this.confirmPassword,
      gender : this.gender,
      contactnumber : this.contactnumber,
      status : this.status,
      jobtype : this.jobtype,
      bankname : this.bankname,
      bankaccountnumber : this.bankaccountnumber,
      NRIC : this.NRIC,
      role : this.role
  });
}


 createStaffFormControls(){
    
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
    this.status = new FormControl('');
    this.jobtype = new FormControl('');
    this.gender = new FormControl('');
    this.contactnumber = new FormControl('');
    this.bankname = new FormControl('');
    this.bankaccountnumber = new FormControl('');
    this.NRIC = new FormControl('');
    this.role  = new FormControl('');

  }

}
