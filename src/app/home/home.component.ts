import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Product} from "../models/product";
import {BaseService} from "../services/base.service";
import * as _ from 'lodash';
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../models/user";
import {AlertService} from "../services/alert.service";
import {StoreService} from "../services/store.service";
import {isBoolean} from "util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product: Product[] = [];
  public cart:any = [];
  private banners : any [];
  currentUser: User;
  public cart_to_ = {};

  private allProduct: Subscription;
  private cartSubscription: Subscription;
  private bannerSubscription: Subscription;

  constructor(private baseservice: BaseService,
              private alert: AlertService,
              private storeService: StoreService,
              private authenticationservice: AuthenticationService) {
      this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
      this.bannerSubscription = this.baseservice.banner().subscribe(x =>{ this.banners = x });
      console.log(this.banners);
      if (this.currentUser) {
          //user cart items
          this.cartSubscription = this.storeService.GetCartItems()
              .subscribe(items => {
                  this.cart = items;
                  // console.log(this.cart);
              });
      }else{
          this.cart = this.getSavedCartInStorage();
      }
  }

  ngOnInit() {
    this.allProduct = this.baseservice.all_product()
        .subscribe((data: any) => {
          if (_.size(data) > 0) {
            this.product.push(data);
            this.product = this.product[0]['products'];
          }
        });
  }
    count(items){
        return _.size(items);
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

    getSavedCartInStorage(){
        return JSON.parse(localStorage.getItem('cart_Items'));
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

    addToCart(product:any) {

        let toCart = {
            product_id: product.id,
            sku_id: product.Sku,
            user_id: this.currentUser?this.currentUser.id:0
        };


        //check if user is logged in
        if (this.currentUser) {
            this.storeService.AddToCart(toCart)
                .subscribe( (resp:any) => {

                    //first check for notice
                    if (!this.checkForError(resp)) {
                        this.cart = resp.items;
                        this.cart_to_ = {status: true, data:this.cart};
                        this.alert.snotSimpleSuccess(resp.message);
                    }

                });
        }else{
            //use local storage
            this.saveToSession(toCart);
        }
    }


    saveToSession(data:any){

        if (this.count(this.getSavedCartInStorage()) === 0) {

            let $array = [];

            this.storeService.getCommonData('get-local-product?product_id='+data.product_id)
                .subscribe((item:any) => {

                    data.product = item.product;
                    data.quantity = 1;

                    $array.push(data);
                    localStorage.setItem('cart_Items', JSON.stringify($array));
                    this.alert.snotSimpleSuccess("Your product has been added to cart");
                    this.cart = this.getSavedCartInStorage();

                });
        }else{

            //check is item already exists
            let cartItems = this.getSavedCartInStorage();
            let search = _.findLast(cartItems, ['product_id', data.product_id]);

            if (_.size(search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart","Added already");
            }else{
                this.storeService.getCommonData('get-local-product?product_id='+data.product_id)
                    .subscribe((item:any) => {
                        data.product = item.product;
                        data.quantity = 1;

                        cartItems.push(data);
                        localStorage.setItem('cart_Items', JSON.stringify(cartItems));
                        this.alert.snotSimpleSuccess("Your product has been added to cart");
                        this.cart = this.getSavedCartInStorage();
                    });

            }

        }

    }


    checkForError(data:any){
        if (data.error) {
            this.alert.infoMsg(data.error,"Info");
            return true;
        }
    }

}
