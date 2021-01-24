import { AlertService } from '../../services/alert.service';
import {ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../services/base.service";
import * as _ from 'lodash';
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {

  cart: any = [];
  public cart_to_ : any;
  private cartSubscription: Subscription;
  currentUser: User;
  public transactionRef:Guid;
  searching: boolean = false;
  public addressError:string = '';
  public verifyError:string = '';
  userData:any = {};
  public suggestions:any = [];
  calculating:boolean = false;
  hasphone = true;
  public identifier = '';
  public deliveryFee = 0;
  percentage = 0;
  orderTime = '';
  total = 0;
  processing = false;
  states: any = [];
  public disabled: boolean = false;
  public processingOrder: boolean = false;
  public addressNotFound:string = '<span class=\"text-danger apple-font\">Address not found:<span> you can choose the nearest address to your location';

  transactionKey: any = 'pk_test_0c5a4d71930b74660e0cb5dead2dffdb8f8ce129';
  public grandTotal:number = 0;
  proceed = false;

  constructor(
      private storeService: StoreService,
      private route : ActivatedRoute,
      private baseService: BaseService,
      private router : Router,
      private alert: AlertService,
      private cdr: ChangeDetectorRef,
      private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x => { this.currentUser = x;} );
    this.transactionRef = Guid.create();
    // disable resuable route
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.baseService.getStates().subscribe((item) => {
      this.states = item['states'];
    });
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart_Items'));
    this.userData.fname = this.currentUser.fname ? this.currentUser.fname : '';
    this.userData.lname = this.currentUser.lname ? this.currentUser.lname : '';
    this.userData.email = this.currentUser.email ? this.currentUser.email : '';
    this.userData.phone = this.currentUser.phone ? this.currentUser.phone : 0;
    if (this.userData.phone.length != 11) {
      this.hasphone = false;
    }
    // check if address of already logged in user is google verfied
    this.verifyLoggedUserAddress(this.currentUser);
    // console.log(this.currentUser);
  }

  getSavedCartInStorage(){
    return JSON.parse(localStorage.getItem('cart_Items'));
  }

  Subtotal() {
    let total = 0;
    this.cart.forEach(item => {
      total+= item.product.price * item.quantity;
    });
    // this.grandTotal = total;


    setTimeout(() => {
      this.cdr.detectChanges();
    }, 500);
    return total;
  }
  
  // checking the value of input phone 
  checkPhone() {
    if (this.userData.phone.length != 11) {
      this.hasphone = false;
    } else {
      this.hasphone = true;
    }
  }

  removeDuplicateWord(address){
    address = address.replace(/[ - ]/g," ").split(" ");
    let result = [];

    //remvoe duplicates
    for(let i =0; i < address.length ; i++){
      if(result.indexOf(address[i]) == -1) result.push(address[i]);
    }
    //return filtered result
    return result.join(" ").replace(/,/g," ");
  }
  count(item) {
    return _.size(item);
  }

  verifyLoggedUserAddress(params:any){
    //only if address is set and is valid
    if (this.count(params.address) > 4) {
      //remove duplicate words to fine tune the address
      let address = this.removeDuplicateWord(params.address);
      this.baseService.googleSearchPlaces(address)
          .subscribe((resp:any) => {
            if (this.count(resp) > 0) {
              //set address and calculate delivery charges
              this.selectEvent(resp[0]);
            }else{
              //address not found
              this.addressError = `Your address; <strong> ${address}. </strong> was not found. Please enter a delivery address above.`;
            }
          });
    } else {
      this.userData.address = '';
      this.addressError = `Your do not have a verified address. Please enter a delivery address above.`;
    }
  }
  disable() {
    this.disabled = !this.disabled;
  }
  enable() {
    this.disabled = !this.disabled;
  }

  selectEvent(item) {
    this.addressError = '';
    this.userData.address = item.name;
    this.calculateDeliveryFee();
  }

  onChangeSearch(val: string) {
    // console.log(val);
    this.verifyError = '';
    this.searching = true;
    this.baseService.googleSearchPlaces(val)
        .subscribe((resp: any ) => {
          this.suggestions = resp;
          this.searching = false;
        });
  }

  calculateDeliveryFee() {
    this.calculating = true;
    let address = this.userData.address.name ? this.userData.address.name : this.userData.address;
    let name = this.userData.fname + ' ' + this.userData.lname;
    let formData = new FormData();
    formData.append('cart_item', JSON.stringify(this.cart));
    formData.append('email', this.userData.email);
    formData.append('name', name);
    formData.append('phone', this.userData.phone);
    formData.append('delivery_address', address);
    formData.append('user_id', this.currentUser ? this.currentUser.id : 0);

    this.storeService.CalculateDelivery(formData)
        .subscribe((resp: any ) => {
            this.calculating = false;
            this.proceed = true;
          // the response should be delivery fee/charge
            this.identifier = resp.amount.identifier;
            this.deliveryFee = resp.amount.deliveryFee;
            this.percentage = resp.amount.percentage;
            this.grandTotal = resp.amount.grandTotal;
            this.total = resp.amount.total;
            this.orderTime = resp.amount.order_time;
            setTimeout(() => {
              this.cdr.detectChanges();
            }, 500);
        });
  }

  transactionCancelled() {
    // refresh transactionRef
    this.refreshTransactionRef();
  }
  refreshTransactionRef(){
    return this.transactionRef = Guid.create();
  }
  transactionSuccessful(event:any){
    // console.log(event);
    this.processing = true;
    let address = this.userData.address.name?this.userData.address.name:this.userData.address;

    this.processingOrder = true;

    this.refreshTransactionRef();

    let formData = new FormData();

    let items_total:any = this.total;
    let deliveryFee:any = this.deliveryFee;
    let grand_total:any = this.grandTotal;


    formData.append('items', JSON.stringify(this.cart));
    formData.append('transaction_ref', event.reference);
    formData.append('email', this.userData.email);
    formData.append('name', this.userData.name);
    formData.append('phone', this.userData.phone);
    formData.append('items_total', items_total);
    formData.append('grand_total', grand_total);
    formData.append('delivery_fee', deliveryFee);
    formData.append('delivery_address', address);
    formData.append('identifier', this.identifier);
    formData.append('user_id', this.currentUser ? this.currentUser.id : 0);
    // this.off = true;
    this.storeService.PlaceOrder(formData)
        .subscribe(data => {
          this.handleOrderResponse(data);
          this.refreshTransactionRef();
          this.proceed = false;
        });

  }

  handleOrderResponse(data: any) {
    this.clearCart();
    this.total = 0;
    this.grandTotal = 0;
    this.alert.successMsg(data.invoice.remark, 'Payment successful');
    this.processing = false;
    setTimeout(() => {
      this.alert.snotSimpleSuccess(data.message);
      this.router.navigateByUrl('');
    }, 3000);

  }

  clearCart() {
    this.removeLocalStorageCart();
    this.cart = [];
  }
  removeLocalStorageCart() {
    return localStorage.removeItem('cart_Items');
  }

}
