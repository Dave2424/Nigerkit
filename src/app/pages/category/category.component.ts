import { Title, Meta } from '@angular/platform-browser';
import { User } from "./../../models/user";
import { Subscription } from "rxjs";
import { AuthenticationService } from "./../../services/authentication.service";
import { StoreService } from "./../../services/store.service";
import { PostService } from "./../../services/post.service";
import { AlertService } from "./../../services/alert.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categoryProduct: any;
  currentUser: User;
  public cart: any = {};
  private cartSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private alert: AlertService,
    private postservice: PostService,
    private storeService: StoreService,
    private authenticationservice: AuthenticationService
  ) {}

  ngOnInit() {
    this.categoryProduct = this.route.snapshot.data.categorydetails.category.product;
  }

  checkItems() {
    if (this.currentUser) {
      // user cart items
      this.cartSubscription = this.storeService
        .GetCartItems()
        .subscribe((items) => {
          this.cart = items;
        });
    } else {
      this.cart = this.getSavedCartInStorage();
    }
  }

  // Navigation
  Previous(record) {
    this.postservice.Navigate(record.prev_page_url).subscribe((data: any) => {
      this.categoryProduct = data.products;
    });
  }
  next(record) {
    this.postservice.Navigate(record.next_page_url).subscribe((data: any) => {
      this.categoryProduct = data.products;
    });
  }
  firstPage(record) {
    this.postservice.Navigate(record.first_page_url).subscribe((data: any) => {
      this.categoryProduct = data.products;
    });
  }
  lastPage(record) {
    this.postservice.Navigate(record.last_page_url).subscribe((data: any) => {
      this.categoryProduct = data.products;
    });
  }
  // End of Navigation

  count(item: any) {
    return _.size(item);
  }
  checkValue(item: any, type: string, nullValue: string) {
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
  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
  }
  // checking which product is in cart
  checkItemInCart(product) {
    let result: boolean;
    if (this.cart) {
      for (let i = 0; i < this.count(this.cart); i++) {
        let search = _.findLast(this.cart, ["product_id", product.id]);
        // console.log(search);
        if (search) result = true;
        else result = false;
      }
    }
    return result;
  }

  checkForError(data: any) {
    if (data.error) {
      this.alert.infoMsg(data.error, "Info");
      return true;
    }
  }

  addToCart(product_item: any) {
    let toCart = {
      product: product_item,
      product_id: product_item.id,
      sku_id: product_item.Sku,
      user_id: this.currentUser ? this.currentUser.id : 0,
    };
    // check if user is logged in
    if (this.currentUser) {
      this.authenticationservice.setCartItems(product_item);
      this.authenticationservice.setCart(product_item);
      this.alert.snotSimpleSuccess("product added!");
      this.cart = this.getSavedCartInStorage();
      this.checkItemInCart(product_item);
      this.storeService.AddToCart(toCart).subscribe((resp: any) => {
        // first check for notice
        if (!this.checkForError(resp)) {
          this.cart = resp.items;
        }
      });
    } else {
      this.saveToSession(toCart);
      this.checkItemInCart(product_item);
    }
  }

  saveToSession(data: any) {
    if (this.count(this.getSavedCartInStorage()) === 0) {
      data.quantity = 1;
      data.amount = 0;
      let $temp = [];
      $temp.push(data);
      var cartsend = localStorage.setItem("cart_Items", JSON.stringify($temp));
      this.authenticationservice.setCartItems(cartsend);
      this.alert.snotSimpleSuccess("Product added!");
      this.cart = this.getSavedCartInStorage();
    } else {
      // check is item already exists
      let cartItems = this.getSavedCartInStorage();
      let search = _.findLast(cartItems, ["product_id", data.product_id]);

      if (_.size(search) > 0) {
        this.alert.infoMsg(
          "Your product already has been added to cart",
          "Added already"
        );
      } else {
        data.quantity = 1;
        data.amount = 0;
        cartItems.push(data);
        var cartsend = localStorage.setItem(
          "cart_Items",
          JSON.stringify(cartItems)
        );
        this.authenticationservice.setCartItems(cartItems);
        this.alert.snotSimpleSuccess("Product added!");
        this.cart = this.getSavedCartInStorage();
      }
    }
  }
}