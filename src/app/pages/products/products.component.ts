import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Subscription} from "rxjs";
import {StoreService} from "../../services/store.service";
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions} from "ngx-gallery";
import {MatPaginator,PageEvent} from '@angular/material';
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private cart:any = [];
  private cartSubscription: Subscription;
  currentUser: User;
  public relateDetails : any = {};
  private product: Product[] = [];
  private reviews: any[] = [];
  public img_file: any;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;
  constructor(
      private storeService: StoreService,
      private route : ActivatedRoute,
      private router : Router,
      private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
    //disable resuable route
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.checkItems();
  }
  checkItems() {
    if (this.currentUser) {
      //user cart items
      this.cartSubscription = this.storeService.GetCartItems()
          .subscribe(items => {
            this.cart = items;
          });
    }else{
      this.cart = this.getSavedCartInStorage();
    }
  }

  ngOnInit() {
    this.relateDetails = this.route.snapshot.data['relateDetails']['details'][0];
    this.product = this.route.snapshot.data['relateDetails']['product'][0];
    this.reviews = this.route.snapshot.data['relateDetails']['reviews'];
    // this.reviews
    // console.log(this.relateDetails);
    // console.log(this.product);
    // console.log('reviews', this.reviews);

    // Gallery Images
    this.setGallery();
    this.galleryImages = this.getImages(this.product['files']);
  }

  getSavedCartInStorage(){
    return JSON.parse(localStorage.getItem('cart_Items'));
  }

  setGallery(){
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageArrows: false,
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageSize: NgxGalleryImageSize.Contain
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    // this.galleryImages = this.getImages()
  }

  count(items){
    return _.size(items);
  }
  avail(item){
    let avail = '';
    if (item > 0)
      avail = 'In stock';
    else
      avail = 'Out of stock';

    return avail;
  }
  getImages(files){
    const imageUrls= [];
    for(let i = 0;i<files.length;i++){
      imageUrls.push({
        small:this.Image_data(files[i], 'avatar', null),
        medium:this.Image_data(files[i], 'avatar', null),
        big:this.Image_data(files[i], 'avatar', null)
      })
    }
    return imageUrls;
  }

  Image_data(item:any,  type:string, nullValue:string) {
    if (type === 'text') {
      if (this.count(item) === 0) {
        return nullValue;
      }
      return item;
    }

    if (type === 'avatar') {

      if (this.count(item) === 0) {
        return '/assets/images/default/avatar.jpg';
      }
      return this.authenticationservice.baseurl+item;
    }
  }

  //checking which product is in cart
  checkItemInCart(product) {
    let result: boolean;
    if (this.cart) {
      for (let i = 0; i < this.count(this.cart); i++) {
        let search = _.findLast(this.cart, ['product_id', product.id]);
        if (search)
          result = true;
        else
          result = false;
      }
    }
    return result;
  }
}
