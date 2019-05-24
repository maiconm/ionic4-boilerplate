import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /**
   * Login reactive form
   */
  public loginForm: FormGroup;
  /**
   * @param fb Reactive form builder
   */
  constructor(
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
      usuario: [
        '',
        [
          Validators.required,
          Validators.maxLength(25),
          Validators.email
        ]
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)
        ]
      ]
    });
  }

  public login(): void {
    this.loginService.performLogin(this.email, this.password).pipe(
      take(1)
    ).subscribe((isLogged: boolean) => {
      if (isLogged) {
        this.router.navigate(['/']);
      } else {
        alert('error');
      }
    });
  }

}
