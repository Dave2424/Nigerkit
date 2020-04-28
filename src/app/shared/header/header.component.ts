import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit,
  Output
} from '@angular/core';
import {BaseService} from "../../services/base.service";
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/internal/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../../services/store.service";
import {Subscription} from "rxjs/index";
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // ChangeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  loginForm: FormGroup;
  loading = false;
  submitted = false; error = '';
  returnUrl: string;
  private cart:any = [];
  private category: any =[];
  private banners:any = [];
  private cartSubscription: Subscription;
  private categorySubscription: Subscription;
  private bannerSubscription: Subscription;


  @Input() cart_item: any = [];
  @Output() Update_cart = new EventEmitter<Array<any>>();

  constructor(
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private storeService: StoreService,
              private baseService: BaseService,
              private authenticationservice: AuthenticationService) {

    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
    this.categorySubscription = this.baseService.allCategory().subscribe(x => this.category = x['category']);
    this.baseService.banner().subscribe(x => this.banners = x);
  }

  checkItems() {
    if (this.currentUser) {
      //user cart items
      this.cartSubscription = this.storeService.GetCartItems()
          .subscribe(items => {
            this.cart = items;
            this.cart_item = this.cart;
          });
    }else{
      this.cart = this.getSavedCartInStorage();
      this.cart_item  = this.cart;
    }
  }

  ngOnInit() {
    this.checkItems();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  handleResponse(data) {
    if (data.user && data.Access_token) {
      this.authenticationservice.handleToken(data.Access_token);
      if (!this.authenticationservice.loggedIn()) {
        this.error = "Invalid Token supplied";
        return;
      }
      this.authenticationservice.setUser(data.user);
      //set user access Data for later reference
      // this.authenticationservice.setUserData(data.accessData);
      this.checkItems();
      this.router.navigate([this.returnUrl]);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.error = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationservice.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              // console.log(data);
              if (data.user.email_verified_at) {
                this.handleResponse(data);
                this.loading = false;
              } else {
                this.error = 'Your email is not verified. Please verify your email';
                this.loading = false;
              }
            },
            error => {
              this.error = error;
              console.log(error);
              this.loading = false;
            }
        )
  }
  count(items:any){
    return _.size(items);
  }

  logout() {
    this.authenticationservice.logout();
    this.router.navigate([this.returnUrl]);
  }

  getSavedCartInStorage(){
    return JSON.parse(localStorage.getItem('cart_Items'));
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


  // ===================== Remove ITem From Cart ==================//
  removeFromCart(item: any) {

    if (this.currentUser) {
      this.storeService.RemoveFromCart(item.id)
          .subscribe(data => {
            this.cart = data;
            this.cart_item = this.cart;
            this.update_cart();
          });
    } else {
      this.sliceLocalCart(item);
      this.cart_item =this.cart;
      this.update_cart();

    }
  }
  updateLocalCart() {
    localStorage.setItem('cart_Items', JSON.stringify(this.cart));
  }

  sliceLocalCart(item) {
    let cartItems = this.getSavedCartInStorage();
    let search = _.findLastIndex(cartItems, ['product_id', item.product_id]);

    cartItems.splice(search, 1);
    this.cart = cartItems;
    this.updateLocalCart();
    // console.log('local');
    // this.update_cart();
  }
  Subtotal() {
    let total = 0;
    this.cart.forEach(item => {
      total+= item.product.price * item.quantity;
    });
    return total;
  }
  update_cart() {
    this.Update_cart.emit(this.cart_item);
  }
}
