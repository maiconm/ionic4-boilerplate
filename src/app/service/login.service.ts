import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /**
   * @param http Permite fazer requisicoes http.
   */
  constructor(private http: HttpClient) { }

  public performLogin(emailUser: string, passUser: string): Observable<boolean> {
    const user = { email: emailUser, password: passUser };
    return this.http.post<string>('http://localhost:3000/login', user).pipe(
      map((token: any) => {
        localStorage.setItem('token', token.accessToken);
        return true;
      }),
      catchError(() => of(false))
    );
  }
}
