import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: any;
password: any;
toasterInstance: any;

  constructor(public router: Router,private authService:AuthService,toasterService:ToasterService) {

    this.toasterInstance = new ToasterComponent(toasterService);
  }
  ngOnInit() {
  }

login(username, password) {
    let myThis=this;
    this.authService.signIn(username,password)
    .then(function(){
       myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Login Successful');
        myThis.router.navigate(['']);
    })
    .catch(function(){
     myThis.toasterInstance.ToasterSuccess('error', 'error', 'Wrong Email or Password!');

    })
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

  signOut(){
  this.authService.signOut();

  }

}

