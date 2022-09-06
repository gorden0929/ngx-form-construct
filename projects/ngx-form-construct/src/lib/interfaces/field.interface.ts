import { AsyncValidator, Validator } from '@angular/forms';

export type IFieldConfig =
  | IFieldArray
  | IFieldButton
  | IFieldInput
  | IFieldObject
  | IFieldSelect
  | IFieldTextarea;

interface IFieldBased {
  type: string;
  label?: {
    text: string;
    classes?: string[];
  }
  grid?: string[];
}

export interface IFieldArray extends IFieldBased {
  type: 'array';
  array: {
    name: string;
    add_button?: {
      label?: string;
      icon?: string[];
      classes?: string[];
    }
    remove_button?: {
      label?: string;
      icon?: string[];
      classes?: string[];
    }
    configs: IFieldConfig[];
  }
}

export interface IFieldButton extends IFieldBased {
  type: 'button';
  button: {
    type: 'submit' | 'reset' | 'button';
    text: string;
    icon?: string[];
    classes?: string[];
  }
}

export interface IFieldInput extends IFieldBased {
  type: 'input';
  input:
  | IFieldInputGeneral
  | IFieldInputNumber
  | IFieldInputCheckbox
  | IFieldInputRadio;
  // input: IFieldInputText | IFieldInputNumber
}

export interface IFieldInputGeneral extends IValidator {
  type: 'text' | 'email' | 'tel';
  name: string;
  placeholder?: string;
  classes?: string[];
}

export interface IFieldInputNumber extends IValidator {
  type: 'number';
  name: string;
  placeholder?: string;
  classes?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export interface IFieldInputCheckbox {
  type: 'checkbox';
  name: string;
  inline: boolean;
  classes?: string[];
  checkboxes: [
    { label: string, value: string }
  ]
}

export interface IFieldInputRadio {
  type: 'radio';
  name: string;
  inline: boolean;
  classes?: string[];
  radios: [
    { label: string, value: string }
  ]
}

export interface IFieldObject extends IFieldBased {
  type: 'object';
  object: {
    name: string;
    configs: IFieldConfig[];
  }
}

export interface IFieldSelect extends IFieldBased {
  type: 'select';
  select: {
    name: string;
    data: any[],
    placeholder?: string;
    classes?: string[];
    key_property?: string;
    value_property?: string;
  }
}

export interface IFieldTextarea extends IFieldBased {
  type: 'textarea';
  textarea: {
    name: string;
    classes?: string[];
    placeholder?: string;
    rows?: number;
    validators?: Validator[];
    async_validators?: AsyncValidator[];
  }
}

interface IValidator {
  validators?: Validator[];
  async_validators?: AsyncValidator[];
}