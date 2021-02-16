import { StoreService } from "./../services/store.service";
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({ providedIn: "root" })
export class CheckOutGuard implements CanActivate {
  checkout: any[];
  constructor(
    private router: Router,
    storeService: StoreService,
    private authenticationService: AuthenticationService
  ) {
    // this.storeService.GetCartItems(this.currentUser.id).subscribe((items) => {
    //   if (this.count(items) > 0) {
    //     this.cart = items;
    //   }
    //   this.show = false;
    //   // console.log(this.cart);
    // });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(state);
    // console.log(route);
    this.checkout = JSON.parse(localStorage.getItem("cart_Items"));
    if (this.checkout) return true;
    else this.router.navigate(["/cart"]);
    return false;
  }
}
