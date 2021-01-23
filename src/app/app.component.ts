import { Component, OnDestroy } from '@angular/core';
import { Event, Router, NavigationEnd, RouterOutlet,
  
   NavigationStart,NavigationCancel,NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nigerkit';
  loading = false;

  constructor(
    private router: Router) {
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
      // if (routerEvent instanceof NavigationStart) {
      //   this.loading = true;
      //   console.log('This is here, true');
      // }

      // if (routerEvent instanceof NavigationEnd || 
      //   routerEvent instanceof NavigationCancel) {
      //   this.loading = false;
      //   console.log('This is not here, false');
      // }
    });
  }
}

