import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * Declaração de parametros necessários
   * @param router serviço de roteamento
   */
  constructor(private router: Router) { }

  /**
   * Verifica se está logado
   */
  public canActivate(): Observable<boolean> | boolean {
    const loggedIn = localStorage.token || false;
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    console.log('aqui', loggedIn);
    return loggedIn.length > 0;
  }
}
