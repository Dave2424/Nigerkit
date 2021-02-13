import { User } from './../../../models/user';
import { StoreService } from './../../../services/store.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  currentUser: User;
  orderlist: any;
  lists: any;
  show = true;
  @Output() identifier = new EventEmitter<string>();

  constructor(
    private authenticationservice: AuthenticationService,
    private storeservice: StoreService
  ) {
    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.storeservice.OrderList(this.currentUser.id)
    .subscribe( (data: any) => {
      this.orderlist = data.orderlist;
      this.lists = this.orderlist.data;
      this.show = false;
    });

  }
  // Navigation
  Previous(record) {
    this.storeservice.Navigate(record.prev_page_url)
      .subscribe( (data: any) => {
        this.orderlist = data.orderlist;
      });
  }
  next(record) {  
    this.storeservice.Navigate(record.next_page_url)
      .subscribe((data: any) => {
        this.orderlist = data.orderlist;
      });
  }
  firstPage(record) {
    this.storeservice.Navigate(record.first_page_url)
      .subscribe((data: any) => {
        this.orderlist = data.orderlist;
      });
  }
  lastPage(record) {
    this.storeservice.Navigate(record.last_page_url)
      .subscribe((data: any) => {
        this.orderlist = data.orderlist;
      });
  }
    // End of Navigation

  count(item: any) {
    return _.size(item);
  }
  sendIdentifier(id: string) {
    this.identifier.emit(id);
  }
  navigate(identifier) {
    this.sendIdentifier(identifier);
  }
}
