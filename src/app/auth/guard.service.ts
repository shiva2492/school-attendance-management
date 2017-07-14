import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private auth: AuthService,private af:AngularFireAuth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.auth.getAuthenticated()) {
        //     // logged in so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // this.router.navigate(['login']);
        // return false;
        return this.af.authState.map(auth => {
            if (!(auth)) {
            this.router.navigate(['login']);
            return false;
            } else {
            return true;
            }
        });
    }
}