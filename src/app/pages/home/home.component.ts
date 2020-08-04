import { CartService } from "./../../services/cart.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "../../models/product";
import { BaseService } from "../../services/base.service";
import * as _ from "lodash";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user";
import { AlertService } from "../../services/alert.service";
import { StoreService } from "../../services/store.service";
import { NgxSmartModalService } from "ngx-smart-modal";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize,
} from "ngx-gallery";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public product: Product[] = [];
  public products: any = [];
  public posts: any = [];

  public top_rated: any = [];
  public best_sellers: any = [];
  public special_offers: any = [];
  public top_banners: any = [];
  public banner_two: any = {};
  public categories: any = [];

  public cart: any = {};
  currentUser: User;
  public cart_to_: any;
  public img_file: any;
  public iscart = false;
  banner: any;
  fake: number = 0.75;
  sku_no: any;
  loading: any = "";
  item_index: any = "";

  private ProductSubscription: Subscription;
  private cartSubscription: Subscription;
  private bannerSubscription: Subscription;

  bannerSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  CarouselOptions = { items: 3, dots: true, nav: true };
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private baseservice: BaseService,
    private cartservice: CartService,
    private alert: AlertService,
    public ngxSmartModalService: NgxSmartModalService,
    private storeService: StoreService,
    private authenticationservice: AuthenticationService
  ) {
    this.authenticationservice.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.checkItems();
  }

  ngOnInit() {
    //   this.cart = this.authenticationservice.
    this.ProductSubscription = this.baseservice
      .getIndexData()
      .subscribe((data: any) => {
        // console.log(data);
        this.products = data.data.products;
        this.posts = data.data.posts;
        this.top_rated = data.data.top_rated_products;
        this.best_sellers = data.data.best_sellers;
        this.special_offers = data.data.special_offers;
        this.top_banners = data.data.top_banners;
        this.banner_two = data.data.banner_two;
        this.categories = data.data.categories;
      });
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

  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
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

  getBannerUrl() {
    // console.log(this.banner_two)
    if (this.banner_two.pictures != null) {
      return this.banner_two.pictures;
    } else {
      return `url('${this.Image_data(
        this.banner_two.pictures,
        "avatar",
        null
      )}')`;
    }
  }

  avail(item) {
    let avail = "";
    if (item > 0) avail = "In stock";
    else avail = "Out of stock";

    return avail;
  }

  quickView(item, index) {
    this.loading = index;
    this.img_file = item.files;
    this.setGallery();
    this.galleryImages = this.getImages(this.img_file);
    setTimeout(() => {
      this.ngxSmartModalService.setModalData(item, "productModal", true);
      this.ngxSmartModalService.getModal("productModal").open();
      this.loading = "";
    }, 1000);
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
}
