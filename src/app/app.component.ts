import { Component, OnDestroy } from '@angular/core';
import { Event, Router, NavigationEnd, RouterOutlet, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nigerkit';

  constructor(
    private router: Router) {
    // =================== Subscribe to route events ======================//
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        window.scrollTo(0, 0);
        this.router.navigated = true;
      }

      if (routerEvent instanceof NavigationEnd) {
        // this.loading = false;
        this.router.navigated = false;
      }
    });
  }
}

