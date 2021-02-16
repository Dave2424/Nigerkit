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
  public top_banners: any = [];
  private ProductSubscription: Subscription;

  bannerSlideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 5000};
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor(private baseservice: BaseService,private authenticationservice: AuthenticationService) {

    this.ProductSubscription = this.baseservice.getIndexData()
      .subscribe((data: any) => {
        // console.log(data)
        this.top_banners = data.data.top_banners;
      });
  }

  ngOnInit() {
  }

}
