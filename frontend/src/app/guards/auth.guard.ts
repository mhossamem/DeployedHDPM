import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: UserService, private router: Router) {

    }
    canActivate() {
        if (this.authService.loggedIn() == false) {
            this.router.navigate(['/login']);
            return false;
        }
        else {

            return true;
        }
    }
}