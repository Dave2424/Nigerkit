import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../services/base.service";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../services/authentication.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  private banners: any = [];
  private bannerSubscription: Subscription;

  bannerSlideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 5000};
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor(private baseservice: BaseService,private authenticationservice: AuthenticationService) {
    this.bannerSubscription = this.baseservice.banner().subscribe(x => {this.banners = x['banner']; });
  }

  ngOnInit() {
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
  count(items) {
    return _.size(items);
  }

}
