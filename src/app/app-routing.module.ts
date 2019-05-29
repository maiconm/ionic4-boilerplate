import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginRedirectGuard } from './guards/login-redirect.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginRedirectGuard]
  }
];
/**
 * Routes.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
