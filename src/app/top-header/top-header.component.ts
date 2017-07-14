import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
@Output() userUpdated = new EventEmitter();

  constructor(private router: Router,private auth: AuthService) {

    }

  ngOnInit() {

  }

  logout(){
  this.auth.signOut();
  this.userUpdated.emit();
  this.router.navigate(['login']);

  }

}
