import { environment } from "src/environments/environment";
import { Validators } from "@angular/forms";
import { FormConfig, FormTabConfig } from "src/app/components/interfaces/form.interface";
const apiBaseUrl: String = environment.apiBaseUrl;

export const data : FormTabConfig= {
  fName: 'Extended Login',
tabConfig: [{index: 0, name : "Customer+PWD", isVisible:true, getUrl: `${apiBaseUrl}/get`, fields : [
  {
    type: 'input',
    label: 'Cusgtomer Id',
    inputType: 'text',
    name: 'name',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text',
      },
    ],
  },
  {
    type: 'input',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required',
      },
    ],
  },
  {
    type: 'button',
    label: 'Save',
  },
]} , {index: 1, name : "Customer+MPIN", isVisible:true,  getUrl: `${apiBaseUrl}/get`, fields : [
  {
    type: 'input',
    label: 'Customer ID',
    inputType: 'text',
    name: 'name',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text',
      },
    ],
  },
  {
    type: 'input',
    label: 'MPIN',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required',
      },
    ],
  },
  {
    type: 'button',
    label: 'Save',
  },
]},
{index: 3, name : "RMN+MPIN", isVisible:true, getUrl: `${apiBaseUrl}/get`,
fields : [
  {
    type: 'input',
    label: 'Mobile Number',
    inputType: 'text',
    name: 'name',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text',
      },
    ],
  },
  {
    type: 'input',
    label: 'MPIN',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required',
      },
    ],
  },
  {
    type: 'button',
    label: 'Save',
  },
]

}]


};

