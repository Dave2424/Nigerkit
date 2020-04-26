import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import { ProductsComponent } from './products/products.component';
import { BannersComponent } from './banners/banners.component';
import { LaddaModule } from  'angular7-ladda';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ToastrModule } from 'ngx-toastr';
import {BaseService} from "./services/base.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeMainComponent,
    ProductsComponent,
    BannersComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule,
    BrowserAnimationsModule,
    LaddaModule.forRoot({
      style: "expand-right",
      spinnerSize: 30,
      spinnerLines: 13}),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 6000
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
