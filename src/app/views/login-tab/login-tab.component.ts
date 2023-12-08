import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormTabConfig } from 'src/app/components/interfaces/form.interface';
import { data } from './formData';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.scss']
})
export class LoginTabComponent implements OnInit , AfterViewInit {
  //@ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  dataConfig: FormTabConfig = data;


 // pageName: String = "Login"
  submit(value: any) {
   console.log(value);
  }

  // Prevent lifecycle errors for Angular
  constructor(private cdRef: ChangeDetectorRef) {}
 ngOnInit(): void {
   this.dataConfig.fName="Login";
   console.log('Login oninit');
 }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}
