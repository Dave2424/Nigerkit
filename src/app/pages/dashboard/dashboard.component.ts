import { Router } from '@angular/router';
// import { *as$ } from 'jquery';
import { StoreService } from './../../services/store.service';
import { User } from './../../models/user';
import { BaseService } from './../../services/base.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url = '';
  currentUser: User;
  recent: any;
  identifier = '';
  show = true;

  constructor(
    private authenticationservice: AuthenticationService,
    private router: Router,
    private storeservice: StoreService,
    ) {
    this.authenticationservice.currentUser.subscribe(x =>{
      this.currentUser = x;
      this.storeservice.OrderListRecent(this.currentUser.id)
        .subscribe( (data: any) => {
          this.recent = data.recent_order;
          this.show = false;
        });
    });
  }

  ngOnInit() {
  }
  navigate(url, identifier = '') {
    this.identifier = identifier;
    this.url = url;
  }
  count(item: any) {
    return _.size(item);
  }
  getIdentifierdetail(id) {
    this.navigate('orderdetails', id);
  }
  back(string){
    this.navigate('dashboard');
  }

  logout() {
    this.authenticationservice.logout();
    this.router.navigate(['']);
  }
}
