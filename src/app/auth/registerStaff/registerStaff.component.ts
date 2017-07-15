import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-register-staff',
  templateUrl: './registerStaff.component.html',
  styleUrls: ['./registerStaff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  
  toasterInstance: any;
  
  constructor(private authService: AuthService,private service: SharedService,public router: Router, private toasterService: ToasterService) {
      this.service.onMenuEvent.emit(false);
     this.service.onHeaderEvent.emit(true);
   }

  ngOnInit() {
  }

    onStaffRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const userName = form.value.username;
    let myThis = this;
    console.log(email);
    this.authService.signUpStaff(email, password)
      .then(function (user) {
        myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Staff is successfully registered..!');
        myThis.router.navigate(['']);
      }).catch(function (error) {
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Staff');
      });

  }

}
