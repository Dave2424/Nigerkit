import { StoreService } from './../../../services/store.service';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  @Input() identifier: any;
  details: any;
  show = true;
  orderedItem: any;
  vatfee: any;
  constructor(
    private storeservice: StoreService
  ) { }

  ngOnInit() {
    this.storeservice.OrderDetails(this.identifier)
      .subscribe((data: any) => {
        // console.log(data);
        this.details = data.details;
        this.orderedItem = this.details.user_invoice.items;
        this.show = false;
        this.vatfee = data.vatFee;
      });
  }

  count(item: any) {
    return _.size(item);
  }
}
