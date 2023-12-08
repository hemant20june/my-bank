import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { FormConfig } from 'src/app/components/interfaces/form.interface';
import { data } from './formData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , AfterViewInit {

  dataConfig: FormConfig = data;

  // Prevent lifecycle errors for Angular
  constructor(private cdRef: ChangeDetectorRef , private router: Router , private  keycloak: KeycloakService) {
  }

  submit(value: any) {
   console.log(value);
   this.router.navigate(['/dashboard']);
  }

//  ngOnInit(): void {
//    console.log('Login oninit');
//  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  user = '';
  userToken = '';



  ngOnInit(): void {
    console.log('Login oninit');
    this.initializeUserOptions();
    this.dataConfig.fName = 'Welcome user ' + this.user;

    this.keycloak.getToken().then(function(value) {
      console.log('token ' + value);
   }, function(error) {
      // This is called when error occurs.
      console.log('error in fetching token ');
   }
)
    console.log('Login oninit userToken' + this.userToken);
  }

  private async initializeUserOptions(): Promise<void> {
    this.user = this.keycloak.getUsername();
    this.userToken= await  this.keycloak.getToken();
  }

  logout(value: any): void {
    console.log('Logout ' + value);

    this.keycloak.logout('http://localhost:8085');
    this.router.navigate(['/']);
  }


}


