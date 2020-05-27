import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";
import {AuthenticationService} from "../services/authentication.service";
import {Subscription} from "rxjs/index";
import {User} from "../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../services/base.service";
import * as _ from 'lodash';
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: any = [];
  public cart_to_ : any;
  private cartSubscription: Subscription;
  currentUser: User;
  transactionRef:Guid;
  searching: boolean = false;
  public addressError:string = '';
  public verifyError:string = '';
  userData:any = {};
  public suggestions:any = [];
  calculating:boolean = false;
  public disabled: boolean = false;
  public processingOrder: boolean = false;
  public addressNotFound:string = '<span class=\"text-danger apple-font\">Address not found:<span> you can choose the nearest address to your location';

  transactionKey:any = 'pk_test_0c5a4d71930b74660e0cb5dead2dffdb8f8ce129';
  public grandTotal:number = 0;
  proceed = false;

  constructor(
      private storeService: StoreService,
      private route : ActivatedRoute,
      private baseService: BaseService,
      private router : Router,
      private cdr: ChangeDetectorRef,
      private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x );
    this.transactionRef = Guid.create();
    //disable resuable route
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('ready_to_buy'));
    this.userData.name = this.currentUser.name;
    this.userData.email = this.currentUser.email;
    this.userData.phone = this.currentUser.phone?this.currentUser.phone:0;
    //check if address of already logged in user is google verfied
    this.verifyLoggedUserAddress(this.currentUser);
  }

  getSavedCartInStorage(){
    return JSON.parse(localStorage.getItem('cart_Items'));
  }

  Subtotal() {
    let total = 0;
    this.cart.forEach(item => {
      total+= item.product.price * item.quantity;
    });
    this.grandTotal = total;


    setTimeout(() => {
      this.cdr.detectChanges();
    }, 500);
    return total;
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
    }else{
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
    // this.calculateDeliveryFee(item, this.venturesId);
  }

  onChangeSearch(val: string) {
    this.verifyError = '';
    this.searching = true;
    // this.suggestions = this.json_value();
    this.baseService.googleSearchPlaces(val)
        .subscribe((resp:any) => {
          this.suggestions = resp;
          this.searching = false;
        });
  }

  calculateDeliveryFee(item:any){
    this.calculating = true;
    // make the call
    let data = {
      // venture_ids : filteredIds,
      place_id : item.place_id
    };

    this.storeService.CalculateDelivery(data)
        .subscribe((resp:any) => {
          // the response should be delivery fee/charge
          // add it to cart and notify customer
          if (resp.error) {
            this.verifyError = resp.error;
            // this.showPaymentButton = false;
            return;
          } else {
            // show delivery price and add to total
            // this.showPaymentButton = true;
            // this.deliveryFee = resp.result.price;
            // this.percentage = resp.result.percentage;
            // this.salePercentage = ((this.total * this.percentage) / 100);
            // this.grandTotal = this.total + resp.result.price;
            // this.grandTotal = this.grandTotal + ((this.grandTotal * resp.result.percentage) / 100);
            // this.salePercentage = ((this.total * this.percentage) / 100);
            // this.grandTotal = this.total + this.deliveryFee + this.salePercentage;
            this.proceed = true;
            setTimeout(() => {
              this.cdr.detectChanges();
            }, 500);
          }
        });
  }

  proceedTo() {
    this.calculating = true;
    if (_.isEmpty(this.userData.address)) {
      // this.presentToast('Valid address is required');
    } else {
      // this.loader();
      // this.spin = true;
      // this.enable();
      let address = this.userData.address.name ? this.userData.address.name : this.userData.address;

      this.processingOrder = true;

      // this.refreshTransactionRef();

      let formData = new FormData();
      formData.append('items', JSON.stringify(this.cart));
      formData.append('email', this.userData.email);
      formData.append('name', this.userData.name);
      formData.append('phone', this.userData.phone);
      formData.append('delivery_address', address);
      formData.append('user_id', this.currentUser ? this.currentUser.id : 0);

      this.storeService.CalculateProduct(formData)
          .subscribe(data => {
            // this.disabled = !this.disabled;
            // this.ischeckout = false;
            // this.spin = false;
            // this.proceed = true;
            // console.log(data);
            // let amount = data["amount"];
            // console.log(amount["amount"]);
            // this.total = amount.total;
            // this.deliveryFee = amount.deliveryFee;
            // this.salePercentage = amount.salePercentage;
            // this.grandTotal = amount.grandTotal;
            // this.date = amount.order_time;
            // this.identifier = amount.identifier;
            // this.showCart = false;
            // this.showCheckout = false;
            // this.orderSummary = true;
            // this.page = 'Order summary';
            // this.dismiss();
          }, error => {
            console.log(error);
          });
    }
  }
  transactionCancelled() {
    //refresh transactionRef
    this.refreshTransactionRef();
  }
  refreshTransactionRef(){
    return this.transactionRef = Guid.create();
  }
  transactionSuccessful(event:any){
    let address = this.userData.address.name?this.userData.address.name:this.userData.address;

    this.processingOrder = true;

    this.refreshTransactionRef();

    let formData = new FormData();

    // let items_total:any = this.total;
    // let deliveryFee:any = this.deliveryFee;
    // let grand_total:any = this.grandTotal;


    // formData.append('items', JSON.stringify(this.cart));
    formData.append('transaction_ref', event.reference);
    formData.append('email', this.userData.email);
    // formData.append('name', this.userData.name);
    // formData.append('phone', this.userData.phone);
    // formData.append('items_total', items_total);
    // formData.append('grand_total', grand_total);
    // formData.append('delivery_fee', deliveryFee);
    // formData.append('delivery_address', address);
    // formData.append('identifier', this.identifier);
    // formData.append('user_id', this.currentUser ? this.currentUser.id : 0);
    // this.off = true;
    this.storeService.PlaceOrder(formData)
        .subscribe(data => {
          // this.handleOrderResponse(data);
          this.refreshTransactionRef();
          this.processingOrder = false;
          console.log(data);
          // this.proceed = false;
          // this.off = false;
        });

  }

}
