import { Component, OnDestroy } from "@angular/core";
import {
  Event as RouterEvent,
  Router,
  NavigationEnd,
  RouterOutlet,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  ActivatedRoute,
} from "@angular/router";
import { NgZone, Renderer, ElementRef, ViewChild } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Nigerkit";
  loading: boolean;
  @ViewChild("spinnerElement", { static: true })
  spinnerElement: ElementRef;
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer,
    private route: ActivatedRoute
  ) {
    // =================== Subscribe to route events ======================//
    // this.router.events.subscribe((routerEvent: Event) => {
    //   switch (routerEvent instanceof Navigator) {
    //     case routerEvent instanceof NavigationStart: {
    //       this.loading = true;
    //     }
    //     case routerEvent instanceof NavigationEnd:
    //     case routerEvent instanceof NavigationCancel:
    //     case routerEvent instanceof NavigationError: {
    //       this.loading = false;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // });
    // router.events.subscribe(this._navigationInterceptor);
    this.routerEvents();
  }
  routerEvents() {
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.loading = false;
          break;
        }
      }
    });
  }
  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          "opacity",
          "1"
        );
      });
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }
  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        "opacity",
        "0"
      );
    });
  }
}
