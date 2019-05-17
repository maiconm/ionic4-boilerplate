import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * Url para qual retornar depois de login
   */
  public returnUrl: string;
  /**
   * Declaração de parametros necessários
   * @param httpservice serviço de rede
   * @param router serviço de roteamento
   */
  constructor(
    private router: Router
  ) {

  }

  /**
   * Verifica se está logado
   * @param route rota que ativou o guard
   * @param state estado da rota
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (localStorage['token']) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
