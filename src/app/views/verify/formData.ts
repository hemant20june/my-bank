import { environment } from "src/environments/environment";
import { Validators } from "@angular/forms";
import { FormConfig, FormTabConfig } from "src/app/components/interfaces/form.interface";
const apiBaseUrl: String = environment.apiBaseUrl;

export const data : FormConfig= {
getUrl: `${apiBaseUrl}/get`,
fName: 'Account verification',
fields : [
  {
    type: 'select',
    label: 'Accounts',
    name: 'account',
    optionLoadKey:'COUNTRY'
  },
  {
    type: 'inputOTP',
    label: 'OTP',
    name: 'otp',
    otpConfig:
    {
      length: 6,
      timer: 60,
      timerType: 0,
      numbersOnly: true
    }
  },
  {
    type: 'button',
    label: 'Save',
  },
]
};

