import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import {AuthService} from '../auth.service';
import { SharedService } from '../../providers/shared.service';
import * as firebase from 'firebase';
import { DatabaseService } from '../../providers/database.service';
import { LocalStorageService } from 'angular-2-local-storage';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: any;
password: any;
toasterInstance: any;

  constructor(public router: Router,private authService:AuthService,toasterService:ToasterService,private service: SharedService,private db: DatabaseService,private localStorage: LocalStorageService) {

    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(false);
  }
 

login(username, password) {
    let myThis=this;
    this.authService.signIn(username+'@gmail.com',password)
    .then(function(user){
       
        myThis.db.getObject('users/'+user.uid)
       .subscribe((res)=>{
        
          myThis.localStorage.set('user',res);
          myThis.db.userList = res;
          console.log('got user data',myThis.db.userList);
          myThis.toasterInstance.ToasterSuccess('success', 'Success', 'Login Successful');
          if(myThis.db.userList.role == 'admin')
            myThis.router.navigate(['']);
          else if(myThis.db.userList.role == 'student')
            myThis.router.navigate(['calendar']);
          else if(myThis.db.userList.role == 'teacher')
            myThis.router.navigate(['dailyStudent']);
              
       });
       
    })
    .catch(function(error){
      console.log(error);
      myThis.toasterInstance.ToasterSuccess('error', 'error', 'Wrong Username or Password!');

    })
    
  }

   ngOnInit() {
        $(function() {
          
      // Form Validation
      // $('#form-validation').validate({
      //   submit: {
      //     settings: {
      //       inputContainer: '.form-group',
      //       errorListClass: 'form-control-error',
      //       errorClass: 'has-danger'
      //     }
      //   }
      // });

      // Show/Hide Password
      $('.password').password({
        eyeClass: '',
        eyeOpenClass: 'icmn-eye',
        eyeCloseClass: 'icmn-eye-blocked'
      });

      // Switch to fullscreen
      // $('.switch-to-fullscreen').on('click', function () {
      //   $('.cat__pages__login').toggleClass('cat__pages__login--fullscreen');
      // })

      // // Change BG
      // $('.random-bg-image').on('click', function () {
      //   var min = 1, max = 5,
      //     next = Math.floor($('.random-bg-image').data('img')) + 1,
      //     final = next > max ? min : next;

      //   $('.random-bg-image').data('img', final);
      //   $('.cat__pages__login').data('img', final).css('backgroundImage', 'url(assets/modules/pages/common/img/login/' + final + '.jpg)');
      // })

    });
  }

}

