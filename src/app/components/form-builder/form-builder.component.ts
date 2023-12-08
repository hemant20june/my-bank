import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormConfig } from '../interfaces/form.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit , OnDestroy {
  @Output() onSubmit = new EventEmitter();
  @Input() formData : FormConfig ;
  form: FormGroup;

  unsubcribe: any
  constructor() {

    // this.form = new FormGroup({
    //   fields: new FormControl(JSON.stringify(this.formData.fields))
    // })
    // this.unsubcribe = this.form.valueChanges.subscribe((update) => {
    //   console.log(update);
    //   this.formData.fields = JSON.parse(update.fields);
    // });

  }
  ngOnDestroy(): void {
   // this.unsubcribe();
  }


  ngOnInit() {
    this.form = this.createControl(this.formData.fields);
  }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (this.form.valid) {
  //     this.submit.emit(this.form.value);
  //   } else {
  //     this.validateAllFormFields(this.form);
  //   }
  // }

  createControl(formFields: any) {
   // const group = this.fb.group({});
    let fieldsCtrls = {};
    formFields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      fieldsCtrls[field.name] = new FormControl(field.value || '', this.bindValidations(field.validations || []));
      // const control = this.fb.control(
      //   field.value,
      //   this.bindValidations(field.validations || [])
      // );
      // group.addControl(field.name, control);
    });
    return new FormGroup(fieldsCtrls);
  }

  getFormGroup(): any{
    return this.form;
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
