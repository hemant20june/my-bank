import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormConfig } from 'src/app/components/interfaces/form.interface';
import { data } from './formData';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit , AfterViewInit {

  dataConfig: FormConfig = data;

  // Prevent lifecycle errors for Angular
  constructor(private cdRef: ChangeDetectorRef , private router: Router) {}

  submit(value: any) {
   console.log(value);
   //this.router.navigate(['/auth']);
  }

 ngOnInit(): void {
   console.log('Login oninit');
 }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}
