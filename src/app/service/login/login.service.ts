import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

interface IToken {
  accessToken: string;
}
/**
 * Base URL server.
 */
const SERVER = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /**
   * @param http Web services requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Send email and password to get the token.
   * @param emailUser Email
   * @param passUser Password
   */
  public performLogin(emailUser: string, passUser: string): Observable<boolean> {
    const user = { email: emailUser, password: passUser };
    return this.http.post<IToken>(`${SERVER}/login`, user).pipe(
      map((token: IToken) => {
        localStorage.setItem('token', token.accessToken);
        return true;
      }),
      catchError((err: HttpErrorResponse) => throwError(err))
    );
  }
}
