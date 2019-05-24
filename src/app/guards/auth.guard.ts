import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  /**
   * Injectables
   * @param router routing and manage routes
   */
  constructor(private router: Router) { }

  /**
   * Allow route if user has token
   */
  public canActivateChild(): Observable<boolean> | boolean {
    const loggedIn = localStorage.token || false;
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    return loggedIn.length > 0;
  }
}
