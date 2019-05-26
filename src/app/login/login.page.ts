import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { ToastService } from '../service/utils/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  protected waitingRequest = false;
  /**
   * Login reactive form
   */
  protected loginForm: FormGroup;
  /**
   * @param fb Reactive form builder
   */
  constructor(
    private toastSv: ToastService,
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  public ngOnInit() {
    this.initLoginForm();
  }

  public get email(): string {
    return this.loginForm.get('email').value;
  }

  public get password(): string {
    return this.loginForm.get('password').value;
  }

  /**
   * Initialize login form.
   */
  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(25),
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)
        ]
      ]
    });
  }

  public login(): void {
    this.waitingRequest = true;
    this.loginService.performLogin(this.email, this.password).pipe(
      take(1)
    ).subscribe(
      // next:
      (isLogged: boolean) => {
        isLogged
        ? this.router.navigate(['/'])
        : this.toastSv.createToast(
          'something bad happened',
          true
        );
      },
      (err: HttpErrorResponse) => {
        this.toastSv.createToast(
          // if type of error equals string,
          // means the web service returned a message:
          typeof err.error === typeof 'string'
          // then it should show the error message:
          ? err.error
          // otherwise, shows:
          : '❌ something bad happened 💩',
          true
        );
      }
    );
  }

}
