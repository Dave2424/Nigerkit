import { AlertService } from "./../../services/alert.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "../../services/store.service";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user";
import * as _ from "lodash";
import { BaseService } from "../../services/base.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cart: any = [];
  public cart_to_: any;
  currentUser: User;
  private total: any;
  show = true;

  private cartSubscription: Subscription;
  private skuNosubscription: Subscription;
  constructor(
    private storeService: StoreService,
    private baseService: BaseService,
    private router: Router,
    private alert: AlertService,
    private authenticationservice: AuthenticationService
  ) {
    this.authenticationservice.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.checkItems();
  }

  ngOnInit() {
    // this.checkItems();
  }
  checkItems() {
    if (this.currentUser) {
      // user cart items
      this.cartSubscription = this.storeService
        .GetCartItems(this.currentUser.id)
        .subscribe((items) => {
          if (this.count(items) > 0) {
            this.cart = items;
          }
          this.show = false;
          // console.log(this.cart);
        });
    } else {
      if (this.count(this.getSavedCartInStorage()) > 0) {
        this.cart = this.getSavedCartInStorage();
        this.show = false;
      }
    }
  }

  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
  }

  count(items) {
    return _.size(items);
  }
  Image_data(item: any, type: string, nullValue: string) {
    if (type === "text") {
      if (this.count(item) === 0) {
        return nullValue;
      }
      return item;
    }

    if (type === "avatar") {
      if (this.count(item) === 0) {
        return "/assets/images/default/avatar.jpg";
      }
      return this.authenticationservice.baseurl + item;
    }
  }

  increase(item: any) {
    let max = item.product.quantity;
    if (item.quantity !== 0 && item.quantity < max) {
      item.quantity += 1;
    } else {
      item.quantity = 1;
    }
  }

  decrease(item: any) {
    let max = item.product.quantity;
    if (item.quantity !== 1 && item.quantity < max) {
      item.quantity -= 1;
    } else {
      item.quantity = 1;
    }
  }
  calculateTotal(item) {
    let total = item.product.price * item.quantity;
    return total;
  }
  removeFromCart(item: any) {
    let search = _.findLastIndex(this.cart, ["product_id", item.product_id]);
    this.cart.splice(search, 1);
    if (this.currentUser) {
      this.storeService
        .RemoveFromCart(item.product_id, this.currentUser.id)
        .subscribe((data) => {
          // console.log(data);
          // var cartsend = localStorage.setItem("cart_Items", JSON.stringify(data));
          this.authenticationservice.setCartItems(data);
          this.cart = data;
        });
    } else {
      this.sliceLocalCart(item);
    }
  }

  sliceLocalCart(item: any) {
    let cartItems = this.getSavedCartInStorage();
    let search = _.findLastIndex(cartItems, ["product_id", item.product_id]);
    cartItems.splice(search, 1);
    localStorage.setItem("cart_Items", JSON.stringify(cartItems));
    this.authenticationservice.setCartItems(cartItems);
    this.cart = this.getSavedCartInStorage();
    // }
  }
  subtotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.product.price * item.quantity;
      // console.log(total);
    });
    return total;
  }
  updateLocalCart() {
    localStorage.setItem("cart_Items", JSON.stringify(this.cart));
  }
  getLatestCart(event) {
    this.cart = event;
  }
  addCartToLocal(cart) {
    localStorage.setItem("cart_Items", JSON.stringify(cart));
    if (this.currentUser) {
      this.router.navigate(["/checkout"]);
    } else {
      // this.alert.infoMsg("You must Log in to proceed", "Notice");
      this.router.navigate(["signup"], { state: { isCart: "checkout" } });
    }
  }
}
