import { AlertService } from "../../services/alert.service";
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { StoreService } from "../../services/store.service";
import { AuthenticationService } from "../../services/authentication.service";
import { Subscription } from "rxjs";
import { User } from "../../models/user";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseService } from "../../services/base.service";
import * as _ from "lodash";
import { Guid } from "guid-typescript";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  cart: any = [];
  public cart_to_: any;
  private cartSubscription: Subscription;
  currentUser: User;
  public transactionRef: Guid;
  searching: boolean = false;
  public addressError: string = "";
  public verifyError: string = "";
  userData: any = {};
  public suggestions: any = [];
  calculating: boolean = false;
  hasphone = true;
  public identifier = "";
  public deliveryFee = 0;
  percentage = 0;
  orderTime = "";
  total = 0;
  processing = false;
  states: any = [];
  public disabled: boolean = false;
  transactionKey = "";
  public grandTotal: number = 0;
  proceed = false;

  checkoutForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private router: Router,
    private alert: AlertService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private authenticationservice: AuthenticationService
  ) {
    this.authenticationservice.currentUser.subscribe((x) => {
      this.currentUser = x;
    });
    this.transactionRef = Guid.create();
    // disable resuable route
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.baseService.getStates().subscribe((item) => {
      this.states = item["states"];
    });

    // let formData = new FormData();
    // formData.append("cart_item", JSON.stringify(this.cart));
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart_Items"));
    // this.userData.fname = this.currentUser.fname ? this.currentUser.fname : "";
    // this.userData.lname = this.currentUser.lname ? this.currentUser.lname : "";
    // this.userData.email = this.currentUser.email ? this.currentUser.email : "";
    // this.userData.phone = this.currentUser.phone ? this.currentUser.phone : 0;

    if (this.currentUser.phone.length != 11) {
      this.hasphone = false;
    }
    // console.log(this.currentUser);

    this.checkoutForm = this.formBuilder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      phone: ["", [Validators.required, Validators.maxLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      state: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", Validators.required],
    });
  }

  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
  }

  get f() {
    return this.checkoutForm.controls;
  }

  Subtotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    // this.grandTotal = total;

    setTimeout(() => {
      // if (!this.cdr["destroyed"]) {
      //   this.cdr.detectChanges();
      // }
      this.cdr.markForCheck();
    }, 500);
    return total;
  }

  // checking the value of input phone
  checkPhone() {
    if (this.count(this.currentUser.phone) != 11) {
      this.hasphone = false;
    } else {
      this.hasphone = true;
    }
  }

  removeDuplicateWord(address) {
    address = address.replace(/[ - ]/g, " ").split(" ");
    let result = [];

    //remvoe duplicates
    for (let i = 0; i < address.length; i++) {
      if (result.indexOf(address[i]) == -1) result.push(address[i]);
    }
    //return filtered result
    return result.join(" ").replace(/,/g, " ");
  }
  count(item) {
    return _.size(item);
  }

  disable() {
    this.disabled = !this.disabled;
  }
  enable() {
    this.disabled = !this.disabled;
  }

  calculateDeliveryFee() {
    this.error = "";
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    this.loading = true;
    let formData = new FormData();
    formData.append("cart_item", JSON.stringify(this.cart));
    formData.append("email", this.currentUser.email);
    formData.append(
      "name",
      this.currentUser.fname + " " + this.currentUser.lname
    );
    formData.append("phone", this.currentUser.phone);
    formData.append("state", this.currentUser.state);
    formData.append("city", this.currentUser.city);
    formData.append("delivery_address", this.currentUser.address);
    formData.append("user_id", this.currentUser ? this.currentUser.id : 0);

    this.storeService.CalculateDelivery(formData).subscribe((resp: any) => {
      this.loading = false;
      this.proceed = true;
      // console.log(resp);
      // the response should be delivery fee/charge
      this.identifier = resp.amount_details.identifier;
      this.deliveryFee = resp.amount_details.deliveryFee;
      this.percentage = resp.amount_details.percentage;
      this.grandTotal = resp.amount_details.grandTotal;
      this.total = resp.amount_details.total;
      this.orderTime = resp.amount_details.order_time;
      this.transactionKey = resp.amount_details.key;
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 500);
    });
  }

  transactionCancelled() {
    // refresh transactionRef
    this.refreshTransactionRef();
  }
  refreshTransactionRef() {
    return (this.transactionRef = Guid.create());
  }
  transactionSuccessful(event: any) {
    // console.log(event);
    this.processing = true;
    let address = this.currentUser.address;

    // this.processingOrder = true;

    this.refreshTransactionRef();

    let formData = new FormData();

    let items_total: any = this.total;
    let deliveryFee: any = this.deliveryFee;
    let grand_total: any = this.grandTotal;

    formData.append("items", JSON.stringify(this.cart));
    formData.append("transaction_ref", event.reference);
    formData.append("email", this.currentUser.email);
    formData.append(
      "name",
      this.currentUser.fname + " " + this.currentUser.lname
    );
    formData.append("phone", this.currentUser.phone);
    formData.append("address", this.currentUser.address);
    formData.append("city", this.currentUser.city);
    formData.append("state_id", this.currentUser.state);
    formData.append("items_total", items_total);
    formData.append("grand_total", grand_total);
    formData.append("delivery_fee", deliveryFee);
    formData.append("delivery_address", address);
    formData.append("identifier", this.identifier);
    formData.append("user_id", this.currentUser ? this.currentUser.id : 0);
    // this.off = true;
    this.storeService.PlaceOrder(formData).subscribe(
      (data) => {
        this.handleOrderResponse(data);
        this.refreshTransactionRef();
        this.proceed = false;
      },
      (data) => {
        this.alert.errorMsg(data.message, "Notice");
      }
    );
  }

  handleOrderResponse(data: any) {
    if (data.error) return this.alert.errorMsg(data.message, "Notice");
    this.clearCart();
    this.total = 0;
    this.grandTotal = 0;
    this.alert.successMsg(data.invoice.remark, "Payment successful");
    this.processing = false;
    setTimeout(() => {
      this.alert.snotSimpleSuccess(data.message);
      this.router.navigateByUrl("success-checkout", {
        state: { invoice: data },
      });
    }, 3000);
  }

  clearCart() {
    this.removeLocalStorageCart();
    this.cart = [];
  }
  removeLocalStorageCart() {
    return localStorage.removeItem("cart_Items");
  }
}
