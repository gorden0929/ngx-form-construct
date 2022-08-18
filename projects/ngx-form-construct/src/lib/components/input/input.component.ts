import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldInput } from '../../interfaces/field.interface';

@HtmlComponent({ map: ['input'] })
@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  config!: IFieldInput;
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void { }

  convertToType(): void {
    if (this.config.input.type === 'number') {
      this.formGroup.controls[this.config.input.name].setValue(+this.formGroup.controls[this.config.input.name].value);
    }
  }

  get inputType(): string {
    if (this.config.input.type === 'checkbox') {
      return 'checkbox';
    } else if (this.config.input.type === 'radio') {
      return 'radio';
    }
    return 'others';
  }
}
