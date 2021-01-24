import { Component, OnDestroy } from "@angular/core";
import {
  Event,
  Router,
  NavigationEnd,
  RouterOutlet,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  ActivatedRoute,
} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Nigerkit";
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // =================== Subscribe to route events ======================//
    this.router.events.subscribe((routerEvent: Event) => {
      switch (routerEvent instanceof Navigator) {
        case routerEvent instanceof NavigationStart: {
          this.loading = true;
        }
        case routerEvent instanceof NavigationEnd:
        case routerEvent instanceof NavigationCancel:
        case routerEvent instanceof NavigationError: {
          this.loading = false;
        }
        default: {
          break;
        }
      }
    });
  }
}
