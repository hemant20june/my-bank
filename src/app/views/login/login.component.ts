import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormConfig } from 'src/app/components/interfaces/form.interface';
import {data} from './formData'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , AfterViewInit {

   dataConfig: FormConfig = data;

   // Prevent lifecycle errors for Angular
   constructor(private cdRef: ChangeDetectorRef , private router: Router) {
   }

   submit(value: any) {
    console.log(value);
    this.router.navigate(['/auth']);
   }

  ngOnInit(): void {
    console.log('Login oninit');
  }

   ngAfterViewInit() {
     this.cdRef.detectChanges();
   }
}
