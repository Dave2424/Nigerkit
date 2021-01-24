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
  email =""; password = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private authService: AuthService,
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
  onLogin(){
    this.l_error = "";
    this.l_submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.lloading = true;

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
        console.log(error);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
