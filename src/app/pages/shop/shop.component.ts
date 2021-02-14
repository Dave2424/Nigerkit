import { Product } from "./../../models/product";
import { Subscription } from "rxjs";
import { StoreService } from "./../../services/store.service";
import { AlertService } from "./../../services/alert.service";
import { User } from "./../../models/user";
import { PostService } from "./../../services/post.service";
import { AuthenticationService } from "./../../services/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
  products: any;
  example = [];
  currentUser: User;
  public cart: any = [];
  private cartSubscription: Subscription;
  sortProduct = "Default";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private postservice: PostService,
    private storeService: StoreService,
    private authenticationservice: AuthenticationService
  ) {
    this.authenticationservice.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.checkItems();
    // console.log('this is the Shop');
  }

  ngOnInit() {
    this.products = this.route.snapshot.data.allProduct.products;
    // this.checkItems();
    // this.cartSubscription = this.storeService.GetCartItems()
  }
  sortingProduct() {
    // console.log(this.sortProduct);
    if (this.sortProduct == "Default") {
    } else {
      // this.products.sort((a, b) => (a.name < b.name ? -1 : 1));
      // var sortedArray = this.products.sort((obj1, obj2) => {
      //   if (obj1.name > obj2.name) {
      //     return 1;
      //   }
      //   if (obj1.name < obj2.name) {
      //     return -1;
      //   }
      //   return 0;
      // });
      // console.log(sortedArray);
    }
  }
  // checkItems() {
  //   console.log("this is the testing");
  //   if (this.currentUser) {
  //     // user cart items
  //     this.cartSubscription = this.storeService
  //       .GetCartItems(this.currentUser.id)
  //       .subscribe((items) => {
  //         this.cart.push(items);
  //         console.log("This is the cart");
  //         console.log(this.cart);
  //       });
  //   } else {
  //     this.cart = this.getSavedCartInStorage();
  //   }
  // }

  // checkItems1() {
  //   if (this.currentUser) {
  //     //user cart items
  //     this.cartSubscription = this.storeService
  //       .GetCartItems(this.currentUser.id)
  //       .subscribe((items) => {
  //         this.cart.push(items);
  //       });
  //   } else {
  //     this.cart = this.getSavedCartInStorage();
  //   }
  // }

  checkItems() {
    if (this.currentUser) {
      // user cart items
      this.cartSubscription = this.storeService
        .GetCartItems(this.currentUser.id)
        .subscribe((items) => {
          if (this.count(items) > 0) this.cart = items;
          // console.log(this.cart);
        });
    } else {
      if (this.count(this.getSavedCartInStorage()) > 0)
        // this.cart.push(this.getSavedCartInStorage());
        this.cart = this.getSavedCartInStorage();
    }
  }

  // Navigation
  Previous(record) {
    this.postservice.Navigate(record.prev_page_url).subscribe((data: any) => {
      this.products = data.products;
    });
  }
  next(record) {
    this.postservice.Navigate(record.next_page_url).subscribe((data: any) => {
      this.products = data.products;
    });
  }
  firstPage(record) {
    this.postservice.Navigate(record.first_page_url).subscribe((data: any) => {
      this.products = data.products;
    });
  }
  lastPage(record) {
    this.postservice.Navigate(record.last_page_url).subscribe((data: any) => {
      this.products = data.products;
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
      // if (this.currentUser) {
      for (let i = 0; i < this.count(this.cart); i++) {
        let search = _.findLast(this.cart, ["product_id", product.id]);
        // console.log(search);
        if (search) result = true;
        else result = false;
      }
      // }
      return result;
    }
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
      this.checkItemInCart(product_item);
      this.storeService.AddToCart(toCart).subscribe((resp: any) => {
        // console.log(resp);
        // first check for notice
        if (!this.checkForError(resp)) {
          // let temp = []; temp = product_item;
          // this.cart.push(temp);
          if (resp.items) this.authenticationservice.setCartItems(resp.items);
          this.cart = resp.items;
          this.alert.snotSimpleSuccess(resp.message);
          // console.log(this.cart);
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
      // console.log(cartItems);
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
