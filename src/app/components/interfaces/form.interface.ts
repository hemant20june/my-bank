import { FieldConfig } from "./field.interface";

export interface FormConfig {
  fName?: string;
  getUrl: any;
  fields: FieldConfig[];
  pageTitle?: string;
}

export interface FormTabConfig {
  fName?: string;
  pageTitle?: string;
  tabConfig: TabConfig[];
}

 export interface TabConfig {
  index: number;
  name: string;
  isVisible: boolean;
  fields: FieldConfig[];
  getUrl: any;
}

