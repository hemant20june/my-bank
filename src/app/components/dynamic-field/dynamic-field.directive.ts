import {  Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interfaces/field.interface';
import { InputOtpComponent } from '../input-otp/input-otp.component';


const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  checkbox: CheckboxComponent,
  inputOTP: InputOtpComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit  {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(private container: ViewContainerRef) {}

  ngOnInit() {
    this.componentRef = this.container.createComponent(componentMapper[this.field.type]);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;

    if(this.field.type === 'inputOTP') {

      this.componentRef.instance['onValueChange'].subscribe((a) => this.onInputChange(a));

    }

  }

  public onInputChange(e) {
    console.log("onInputChange  " + e);
    this.componentRef.setInput(this.field.value, e);
    if(e.length == this.field.otpConfig.length) {
      // e will emit values entered as otp and,
      console.log('otp is', e);
    }else if(e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');
    }else if(e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
    }

  }
}
