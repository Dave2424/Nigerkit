import { Title, Meta } from '@angular/platform-browser';
import { AlertService } from "./../../services/alert.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Subscription } from "rxjs";
import { StoreService } from "../../services/store.service";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryImageSize,
  NgxGalleryOptions,
} from "ngx-gallery";
import { MatPaginator, PageEvent } from "@angular/material";
import { Product } from "../../models/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  private cart: any = [];
  private cartSubscription: Subscription;
  currentUser: User;
  relateDetails: any = {};
  product: Product[] = [];
  reviews: any;
  public img_file: any;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private alert: AlertService,
    private storeservice: StoreService,
    private authenticationservice: AuthenticationService
  ) {
    this.authenticationservice.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    //disable resuable route
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.checkItems();
  }
  checkItems() {
    if (this.currentUser) {
      //user cart items
      this.cartSubscription = this.storeService
        .GetCartItems(this.currentUser.id)
        .subscribe((items) => {
          this.cart = items;
        });
    } else {
      this.cart = this.getSavedCartInStorage();
    }
  }

  ngOnInit() {
    this.product = this.route.snapshot.data["relateDetails"]["product"];
    this.reviews = this.route.snapshot.data["relateDetails"]["reviews"];
    this.title.setTitle(this.product["name"]);
    this.meta.addTag({ name: "description", content: this.product["description"] });

    // Gallery Images
    this.setGallery();
    this.galleryImages = this.getImages(this.product["files"]);
  }

  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: "100%",
        height: "400px",
        thumbnailsColumns: 4,
        imageArrows: false,
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageSize: NgxGalleryImageSize.Contain,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    // this.galleryImages = this.getImages()
  }

  count(items) {
    return _.size(items);
  }
  avail(item) {
    let avail = "";
    if (item > 0) avail = "In stock";
    else avail = "Out of stock";

    return avail;
  }
  getImages(files) {
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      imageUrls.push({
        small: this.Image_data(files[i], "avatar", null),
        medium: this.Image_data(files[i], "avatar", null),
        big: this.Image_data(files[i], "avatar", null),
      });
    }
    return imageUrls;
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

  //checking which product is in cart
  checkItemInCart(product) {
    let result: boolean;
    if (this.cart) {
      for (let i = 0; i < this.count(this.cart); i++) {
        let search = _.findLast(this.cart, ["product_id", product.id]);
        if (search) result = true;
        else result = false;
      }
    }
    return result;
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

  checkForError(data: any) {
    if (data.error) {
      this.alert.infoMsg(data.error, "Info");
      return true;
    }
  }

  // Navigation
  Previous(record) {
    this.storeservice.Navigate(record.prev_page_url).subscribe((data: any) => {
      this.reviews = data.reviews;
    });
  }
  next(record) {
    this.storeservice.Navigate(record.next_page_url).subscribe((data: any) => {
      this.reviews = data.reviews;
    });
  }
  firstPage(record) {
    this.storeservice.Navigate(record.first_page_url).subscribe((data: any) => {
      this.reviews = data.reviews;
    });
  }
  lastPage(record) {
    this.storeservice.Navigate(record.last_page_url).subscribe((data: any) => {
      this.reviews = data.reviews;
    });
  }
  // End of Navigation
}
