import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '../service/utils/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  /**
   * Injectables
   * @param router routing and manage routes
   */
  constructor(
    private toastSv: ToastService,
    private router: Router
  ) { }

  /**
   * Allow route if user has token
   */
  public canActivateChild(): Observable<boolean> | boolean {
    const loggedIn = localStorage.token || false;
    if (!loggedIn) {
      this.toastSv.createToast(`you're not authorized`, true);
      this.router.navigate(['/login']);
    }
    return loggedIn.length > 0;
  }
}
