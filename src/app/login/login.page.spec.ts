import { IonicModule } from '@ionic/angular';
import { LoginService } from './../service/login/login.service';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class LoginServiceStub {
  public performLogin(x: string, y: string): Observable<boolean> {
    localStorage.set('token', 'test token');
    return of(true);
  }
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        IonicModule
      ],
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: LoginService, useClass: LoginServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('encontrar 2 inputs', () => {
    const compiledAll = fixture.debugElement.queryAll(By.css('ion-input'));
    expect(compiledAll.length).toBe(2);
  });

  it('encontrar botão login', () => {
    const compiled = fixture.debugElement.query(By.css('ion-button'));
    expect(compiled).toBeTruthy();
  });
});
