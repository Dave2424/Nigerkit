import { User } from "./../../models/user";
import { StoreService } from "./../../services/store.service";
import { Subscription } from "rxjs";
import { AlertService } from "../../services/alert.service";
import { AuthenticationService } from "../../services/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "../../helpers/must-match";
import { first } from "rxjs/operators";
import { AuthService, SocialUser } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";
import { error } from "util";
import * as _ from "lodash";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  loginForm: FormGroup;
  loading = false;
  lloading = false;
  submitted = false;
  l_submitted = false;
  error = "";
  l_error = "";
  returnUrl = "";
  user = { fname: "", lname: "", email: "", phone: "" };
  email = "";
  password = "";
  cartSubscription: Subscription;
  cart: any = [];
  currentUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private authService: AuthService,
    private storeService: StoreService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group(
      {
        fname: ["", Validators.required],
        lname: ["", Validators.required],
        phone: ["", [Validators.required, Validators.maxLength(11)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      { validator: MustMatch("password", "confirmPassword") }
    );

    //Login Form
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }
  get l() {
    return this.loginForm.controls;
  }

  handleResponse(data) {
    if (data.user && data.Access_token) {
      this.authenticationService.handleToken(data.Access_token);
      if (!this.authenticationService.loggedIn()) {
        this.error = "Invalid Token supplied";
        return;
      }
      this.authenticationService.setUser(data.user);

      this.authenticationService.currentUser.subscribe((x) => {
        this.currentUser = x;
        this.checkItems();
      });
      // set user access Data for later reference
      // this.authenticationservice.setUserData(data.accessData);
      // this.cart = this.getSavedCartInStorage();
      // this.cart.user_id = this.currentUser.id;
      this.router.navigate([this.returnUrl]);
    }
  }
  checkItems() {
    if (this.currentUser) {
      // user cart items
      this.cartSubscription = this.storeService
        .GetCartItems(this.currentUser.id)
        .subscribe((items) => {
          if (this.count(items) > 0) this.cart = items;
          // console.log(this.cart);
          this.authenticationService.setCartItems(this.cart);
        });
    } else {
      if (this.count(this.getSavedCartInStorage()) > 0)
        // this.cart.push(this.getSavedCartInStorage());
        this.cart = this.getSavedCartInStorage();
    }
  }
  getSavedCartInStorage() {
    return JSON.parse(localStorage.getItem("cart_Items"));
  }
  count(item: any) {
    return _.size(item);
  }
  onLogin() {
    this.l_error = "";
    this.l_submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.lloading = true;
    this.authenticationService
      .login(this.l.email.value, this.l.pwd.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
          if (data.user.email_verified_at) {
            this.handleResponse(data);
            this.lloading = false;
          } else {
            this.l_error =
              "Your email is not verified. Please verify your email";
            this.lloading = false;
          }
        },
        (error) => {
          // console.log(error);
          this.l_error = error;
          // console.log(error);
          this.lloading = false;
        }
      );
  }

  onSubmit() {
    this.error = "";
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService
      .createUser(this.registrationForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.loading = false;
          this.submitted = false;
          this.alert.snotSimpleSuccess(data.message);
          this.router.navigateByUrl("/");
        },

        (error) => {
          this.error = error;
          // console.log(this.error);
          this.loading = false;
        }
      );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (data) => {
        this.user = {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          phone: "",
        };
      },
      (error) => {
        // console.log(error);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
