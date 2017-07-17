import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../util/toaster/toaster.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import {AuthService} from '../auth.service';
import { SharedService } from '../../shared.service';

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

  constructor(public router: Router,private authService:AuthService,toasterService:ToasterService,private service: SharedService) {

    this.toasterInstance = new ToasterComponent(toasterService);
    this.service.onMenuEvent.emit(false);
    this.service.onHeaderEvent.emit(false);
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

   ngOnInit() {
        $(function() {
          
      // Form Validation
      $('#form-validation').validate({
        submit: {
          settings: {
            inputContainer: '.form-group',
            errorListClass: 'form-control-error',
            errorClass: 'has-danger'
          }
        }
      });

      // Show/Hide Password
      $('.password').password({
        eyeClass: '',
        eyeOpenClass: 'icmn-eye',
        eyeCloseClass: 'icmn-eye-blocked'
      });

      // Switch to fullscreen
      $('.switch-to-fullscreen').on('click', function () {
        $('.cat__pages__login').toggleClass('cat__pages__login--fullscreen');
      })

      // Change BG
      $('.random-bg-image').on('click', function () {
        var min = 1, max = 5,
          next = Math.floor($('.random-bg-image').data('img')) + 1,
          final = next > max ? min : next;

        $('.random-bg-image').data('img', final);
        $('.cat__pages__login').data('img', final).css('backgroundImage', 'url(assets/modules/pages/common/img/login/' + final + '.jpg)');
      })

    });
  }

}

