import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IFieldConfig } from '../interfaces/field.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  buildForm(configs: IFieldConfig[], savedData?: any): FormGroup {
    const formGroup = new FormGroup({});
    configs.forEach(config => {

      if (config.type === 'button') return;

      if (config.type === 'array') {
        const formArray = new FormArray<FormGroup>([]);
        if (savedData && savedData[config.array.name]) {
          savedData[config.array.name].forEach(() => {
            formArray.push(this.buildForm(config.array.configs));
          });
        } else {
          formArray.push(this.buildForm(config.array.configs));
        }
        formGroup.addControl(config.array.name, formArray);
      }

      if (config.type === 'input') {
        formGroup.addControl(config.input.name, new FormControl(null));
      }

      if (config.type === 'object') {
        formGroup.addControl(config.object.name, this.buildForm(config.object.configs));
      }

      if (config.type === 'select') {
        formGroup.addControl(config.select.name, new FormControl(''));
      }

      if (config.type === 'textarea') {
        formGroup.addControl(config.textarea.name, new FormControl(null));
      }
    });
    return formGroup;
  }
}
