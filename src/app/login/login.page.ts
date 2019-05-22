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
   * Formulario login.
   */
  public loginForm: FormGroup;
  /**
   * @param fb Criador de forulario.
   */
  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  public get email(): string {
    return this.loginForm.get('usuario').value;
  }

  public get senha(): string {
    return this.loginForm.get('senha').value;
  }

  /**
   * Inicializa formulario reativo com validacoes.
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
    this.loginService.performLogin(this.email, this.senha).pipe(
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
