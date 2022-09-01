import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidenav';
  public static getDefaultRoute(): Route {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (loggedIn) {
      return {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      };
    } else {
      return {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full',
      };
    }
  }
}
