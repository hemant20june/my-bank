import { environment } from "src/environments/environment";
import { Validators } from "@angular/forms";
import { FormConfig, FormTabConfig } from "src/app/components/interfaces/form.interface";
const apiBaseUrl: String = environment.apiBaseUrl;

export const data : FormConfig= {
getUrl: `${apiBaseUrl}/get`,
fName: 'Home',
fields : [
  {
    type: 'button',
    label: 'Login To Application',
  },

]
};

