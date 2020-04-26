import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Subscription} from "rxjs/index";
import {StoreService} from "../services/store.service";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../models/user";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private cart:any = [];
  private cartSubscription = Subscription;
  currentUser: User;
  constructor(
      private storeService: StoreService,
      private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }
}
