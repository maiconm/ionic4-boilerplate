import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.maxLength(25)],
          Validators.email
        ],
      senha: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)]
        ]
    });
  }

}
