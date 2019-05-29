import { TestBed, inject } from '@angular/core/testing';

import { LoginRedirectGuard } from './login-redirect.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginRedirectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginRedirectGuard]
    });
  });

  it('should ...', inject([LoginRedirectGuard], (guard: LoginRedirectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
