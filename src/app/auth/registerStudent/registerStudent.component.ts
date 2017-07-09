import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-register-student',
  templateUrl: './registerStudent.component.html',
  styleUrls: ['./registerStudent.component.css']
})
export class RegisterStudentComponent implements OnInit {

  toasterInstance: any;
  constructor(private authService: AuthService, public router: Router, private toasterService: ToasterService) {

    this.toasterInstance = new ToasterComponent(toasterService);
  }

  ngOnInit() {

  }

  onStudentRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const userName = form.value.username;
    let myThis = this;
    console.log(email);
    this.authService.signUpStudent(email, password)
      .then(function (user) {
        myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Sudent is successfully registered..!');
        setTimeout(() => { myThis.router.navigate(['']) }, 2000);
      }).catch(function (error) {
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Student');
      });

  }


}
