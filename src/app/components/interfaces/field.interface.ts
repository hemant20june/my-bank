import { Setting } from "../input-otp/models/setting";

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  enabled?:boolean;
  visible?:boolean;
  inputType?: string;
  options?: selectData[];// for dropdown
  optionLoadKey?:string; // for dropdown
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  otpConfig?:Setting; // for OTP input
}

interface selectData {
  id:String;
  val: string;
}


interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

