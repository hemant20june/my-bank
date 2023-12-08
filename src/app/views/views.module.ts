import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { LoginTabComponent } from './login-tab/login-tab.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginTabComponent,
    VerifyComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
