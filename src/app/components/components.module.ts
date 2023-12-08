
import { ButtonComponent } from './button/button.component';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { MaterialModule } from './material.module';
import { DynamicTabFormComponent } from './dynamic-tab-form/dynamic-tab-form.component';
import { InputOtpComponent } from './input-otp/input-otp.component';
import { NumberOnly } from './input-otp/directives/numberOnly.directive';
import { CounterDirective } from './input-otp/directives/timer.directive';
import { KeysPipe } from './input-otp/pipes/keys.pipe';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    SelectComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    DynamicTabFormComponent,
    InputOtpComponent,
    KeysPipe,
    NumberOnly,
    CounterDirective,
    FieldBuilderComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    DynamicFormComponent,
    DynamicTabFormComponent,
    FormBuilderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers:[KeysPipe]

})
export class ComponentsModule { }
