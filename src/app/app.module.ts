import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { ProductsComponent } from "./products/products.component";
import { BannersComponent } from "./banners/banners.component";
import { LaddaModule } from "angular7-ladda";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";
import { ToastrModule } from "ngx-toastr";
import { BaseService } from "./services/base.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { NgxGalleryModule } from "ngx-gallery";
import { CustomHammerConfig } from "./helpers/CustomHammer";
import { ProductDetailsResolve } from "./resolvers/product.resolver";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginatorModule } from "@angular/material";
import { Angular4PaystackModule } from "angular4-paystack";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { SignupComponent } from "./signup/signup.component";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "89246536417-5bm4tnc70gdogh6udh39nvmhjl8ked12.apps.googleusercontent.com"
    ),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id"),
  },
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeMainComponent,
    ProductsComponent,
    BannersComponent,
    CartComponent,
    CheckoutComponent,
    SignupComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    MatTabsModule,
    AutocompleteLibModule,
    MatPaginatorModule,
    Angular4PaystackModule,
    SocialLoginModule,
    NgxSmartModalModule.forRoot(),
    LaddaModule.forRoot({
      style: "expand-right",
      spinnerSize: 30,
      spinnerLines: 13,
    }),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 6000,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    { provide: AuthServiceConfig, useFactory: provideConfig },
    SnotifyService,
    BaseService,
    ProductDetailsResolve,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
