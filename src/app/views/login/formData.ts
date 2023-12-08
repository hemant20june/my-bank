import { environment } from "src/environments/environment";
import { Validators } from "@angular/forms";
import { FormConfig, FormTabConfig } from "src/app/components/interfaces/form.interface";
const apiBaseUrl: String = environment.apiBaseUrl;

export const data : FormConfig= {
getUrl: `${apiBaseUrl}/get`,
fName: 'Login',
fields : [
  {
    type: 'input',
    label: 'customer Id',
    inputType: 'text',
    name: 'customerId',
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
    label: 'Login',
  },
]
};

