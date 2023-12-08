import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormTabConfig, TabConfig } from '../interfaces/form.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-tab-form',
  templateUrl: './dynamic-tab-form.component.html',
  styleUrls: ['./dynamic-tab-form.component.scss']
})
export class DynamicTabFormComponent {

  @Input() formData : FormTabConfig ;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  tabs:TabConfig[];
  selected = new FormControl(0);
  tabtitle:string = '';

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    console.log("dydnamic form Data " + JSON.stringify(this.formData));
    this.tabs = this.formData.tabConfig;

    console.log("dydnamic form Data tabs " + JSON.stringify(this.tabs.length));
    this.tabs.forEach(tab => {
      if(tab.fields.length > 0) {
      this.form = this.createControl(tab.fields);
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl(formFields: any) {
    const group = this.fb.group({});
    formFields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}


