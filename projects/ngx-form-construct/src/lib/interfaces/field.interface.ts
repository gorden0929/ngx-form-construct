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
      label: string;
      classes?: string[];
    }
    remove_button?: {
      label: string;
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
  | IFieldInputText
  | IFieldInputNumber
  | IFieldInputEmail
  | IFieldInputCheckbox
  | IFieldInputRadio;
  // input: IFieldInputText | IFieldInputNumber
}

export interface IFieldInputText extends IValidator {
  type: 'text'
  name: string;
  placeholder?: string;
  classes?: string[];
}

export interface IFieldInputNumber extends IValidator {
  type: 'number'
  name: string;
  placeholder?: string;
  classes?: string[];
}

export interface IFieldInputEmail extends IValidator {
  type: 'email'
  name: string;
  placeholder?: string;
  classes?: string[];
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
    option: {
      datas: any[];
      key_property: string;
      value_property: string;
    }
    placeholder?: string;
    classes?: string[];
    validators?: Validator[];
    async_validators?: AsyncValidator[];
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