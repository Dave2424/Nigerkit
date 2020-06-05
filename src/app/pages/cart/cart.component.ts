import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {StoreService} from "../../services/store.service";
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";
import * as _ from 'lodash';
import {BaseService} from "../../services/base.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = {};
  public cart_to_ : any;
  currentUser: User;
  private total: any;

  private cartSubscription: Subscription;
  private skuNosubscription : Subscription;
  constructor(
      private storeService: StoreService,
      private baseService: BaseService,
      private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x );}

  ngOnInit() {
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
      this.updateCartWithSku();
    }
  }
  updateCartWithSku() {
    this.baseService.get_skuNos().subscribe( data => {
      data['sku'].forEach(item => {
        this.cart.forEach(cart => {
          if (item.id == cart.sku_id) {
            cart.sku_no = item;
          }
        });
      });
    });
  }

  getSavedCartInStorage(){
    return JSON.parse(localStorage.getItem('cart_Items'));
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

  increase(item:any){
    if (item.quantity !== 0) {
      item.quantity  += 1;
    }else{
      item.quantity = 1;
    }
  }


  decrease(item:any){
    if (item.quantity !== 1) {
      item.quantity  -= 1;
    }else{
      item.quantity = 1;
    }
  }
  calculateTotal (item) {
    let total = item.product.price * item.quantity;
    return total;
  }
  removeFromCart(item: any) {

    if (this.currentUser) {
      this.storeService.RemoveFromCart(item.id)
          .subscribe(data => {
            this.cart = data;
            this.cart_to_ = this.cart;
          });
    } else {
      this.sliceLocalCart(item);

    }
  }

  sliceLocalCart(item) {
    let cartItems = this.getSavedCartInStorage();
    let search = _.findLastIndex(cartItems, ['product_id', item.product_id]);
    cartItems.splice(search, 1);
    this.cart = cartItems;
    this.cart_to_ = this.cart;
    this.updateCartWithSku();
    this.updateLocalCart();
  }
  Subtotal() {
    let total = 0;
    this.cart.forEach(item => {
      total+= item.product.price * item.quantity;
    });
    return total;
  }
  updateLocalCart() {
    localStorage.setItem('cart_Items', JSON.stringify(this.cart));
  }
  getLatestCart(event) {
    this.cart = event;
    this.updateCartWithSku();
  }
  addCartToLocal(cart) {
    localStorage.setItem('cart_Items', JSON.stringify(cart));
  }

}
