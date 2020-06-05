import { BlogDetailsResolve } from './resolvers/blogdetails.resolver';
import { BlogResolve } from './resolvers/blog.resolver';
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
import { HomeComponent } from "./pages/home/home.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { ProductsComponent } from "./pages/products/products.component";
import { BannersComponent } from "./pages/banners/banners.component";
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
import { CartComponent } from "./pages/cart/cart.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { SignupComponent } from "./pages/signup/signup.component";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderlistComponent } from './pages/dashboard/orderlist/orderlist.component';
import { OrderdetailsComponent } from './pages/dashboard/orderdetails/orderdetails.component';
import { PasswordComponent } from './pages/dashboard/password/password.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from "./pages/blog/post/post.component";
import { LineTruncationLibModule } from 'ngx-line-truncation';

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
    ProfileComponent,
    DashboardComponent,
    OrderlistComponent,
    OrderdetailsComponent,
    PasswordComponent,
    BlogComponent,
    PostComponent,
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
    LineTruncationLibModule,
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
    BlogResolve,
    BlogDetailsResolve,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
