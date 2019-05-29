import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';

/**
 * Use in Login route.
 */
@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {
  /**
   * @param router Provides navigation and URL manipulation capabilities.
   */
  constructor(private router: Router) { }
  /**
   * If user has token and the current URL is `/login`,
   * the user is redirected to the main route.
   * @returns True if has token, and false in case user
   * doesn't have token, and it redirected to the main route.
   */
  public canActivate(): Observable<boolean> | boolean {
    const loggedIn = localStorage.token || false;
    if (loggedIn && this.router.url === '/login') {
      this.router.navigate(['/']);
    }
    return loggedIn;
  }
}
