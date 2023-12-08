import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LoginTabComponent } from './views/login-tab/login-tab.component';
import { VerifyComponent } from './views/verify/verify.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './common/app.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'bank/login',
  //   component: LoginComponent
  // },
  {
    path: 'loginTab',
    component: LoginTabComponent
  },
  {
    path: 'account',
    component: VerifyComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
