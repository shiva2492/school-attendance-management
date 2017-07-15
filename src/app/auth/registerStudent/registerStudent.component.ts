import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './registerStudent.component.html',
  styleUrls: ['./registerStudent.component.css']
})
export class RegisterStudentComponent implements OnInit {

  toasterInstance: any;
  constructor(private authService: AuthService, public router: Router, private toasterService: ToasterService,private service: SharedService) {

    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(true);
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
        myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Student is successfully registered..!');
        myThis.router.navigate(['']);
      }).catch(function (error) {
        myThis.toasterInstance.ToasterSuccess('error', 'Error', 'Error in Registering Student');
      });

  }


}
