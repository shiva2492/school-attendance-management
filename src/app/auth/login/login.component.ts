import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import {AuthService} from '../auth.service';
import { SharedService } from '../../shared.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: any;
password: any;
toasterInstance: any;

  constructor(public router: Router,private authService:AuthService,toasterService:ToasterService,private service: SharedService) {

    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(false);
  }
  ngOnInit() {
  }

login(username, password) {
    let myThis=this;
    this.authService.signIn(username+'@gmail.com',password)
    .then(function(user){
      
       myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Login Successful');
       myThis.router.navigate(['']);
    })
    .catch(function(error){
      console.log(error);
     myThis.toasterInstance.ToasterSuccess('error', 'error', 'Wrong Email or Password!');

    })
    
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

  

}

