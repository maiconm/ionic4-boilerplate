import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { LoginService } from '../service/login/login.service';
import { ToastService } from '../service/utils/toast.service';

/**
 * Login page.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /**
   * If true, changes the button's label to `loading`.
   */
  protected waitingRequest = false;
  /**
   * Login reactive form
   */
  public loginForm: FormGroup;
  /**
   * @param toastSv Manages toast messages.
   * @param router Manages routing to other component.
   * @param loginService Provides login methods.
   * @param fb Reactive form builder
   */
  constructor(
    private toastSv: ToastService,
    private router: Router,
    private loginService: LoginService,
    public fb: FormBuilder
  ) { }
  /**
   * Presets config for component.
   */
  public ngOnInit() {
    this.initLoginForm();
  }
  /**
   * Email input value.
   */
  public get email(): string {
    return this.loginForm.get('email').value;
  }
  /**
   * Password input value.
   */
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
  /**
   * Send the form's input values.
   */
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
