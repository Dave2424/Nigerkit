import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-checkout-success",
  templateUrl: "./checkout-success.component.html",
  styleUrls: ["./checkout-success.component.css"],
})
export class CheckoutSuccessComponent implements OnInit {
  state$: Observable<object>;

  constructor(public activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this.state$ = this.activatedroute.paramMap.pipe(
      map(() => window.history.state)
    );
    // this.state$.subscribe((data) => {
    // });
  }
  count(item) {
    return _.size(item);
  }
}
