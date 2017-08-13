import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private auth: AuthService,private localStorage: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.auth.getAuthenticated()) {
        //     // logged in so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // this.router.navigate(['login']);
        // return false;

        /* 
        put this in else of nav guard

        if(route.data){
                 this.db.getObject('users/'+auth.uid)
                 .subscribe((user)=>{
                    this.db.userList = user;
                    let roles = route.data["roles"] as Array<string>;
                    console.log('roles in array---',roles);
                    console.log('user info---',this.db.userList);
                    console.log('boolean guard---',roles[0]==this.db.userList.role);
                    if(roles[0] == this.db.userList.role){
                         
                         return true;
                    }
                    else{
                        this.router.navigate(['login']);
                        return false; 
                    }
                 });
                }else{
                    return true;
                }     
            }
        
        */



        return this.auth.af.authState.map(auth => {
            if (!(auth)) {
            this.router.navigate(['login']);
            return false;
            } else {
                if(route.data){
                    // console.log('route roles---', route.data);
                    let roles = route.data["roles"] as Array<string>;
                    let currentUser = this.localStorage.get('user');
                    // console.log('current User----',currentUser["role"]);
                    // console.log('boolean---',roles[0] == currentUser);
                    // console.log('role 0---', roles[0]);
                    if(roles[0] == currentUser["role"]){
                         return true;
                    }
                    else{
                        this.router.navigate(['login']);
                        return false; 
                    }
                }

                return true;
            }
        });
    }
}