import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): Observable<boolean> | boolean {
    const loggedIn = localStorage.token || true;
    if (loggedIn && this.router.url === '/login') {
      this.router.navigate(['/']);
    }
    return loggedIn;
  }
}
