import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 constructor(private authService:AuthService){


}

  ngOnInit() {
  }

  onStudentRegister(form:NgForm){
  const email=form.value.email;
  const password=form.value.password;
  const userName=form.value.username
  console.log(email);
  this.authService.signUpStudent(email,password);
  }

}
