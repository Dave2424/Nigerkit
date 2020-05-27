import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class CheckOutGuard implements CanActivate {
    checkout: any[];
    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.checkout = JSON.parse(localStorage.getItem('ready_to_buy'));
        if (this.checkout)
            return true;
        else
            this.router.navigate(['/cart']);
            return false;
    }
}