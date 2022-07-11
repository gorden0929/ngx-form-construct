import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFieldConfig } from './interfaces/field.interface';

@Component({
  selector: 'ngx-form-construct',
  template: `
    <form class="row" [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <div [ngClass]="config.grid ?? ''" *ngFor="let config of configs">
        <ng-container formField [config]="config" [formGroup]="formGroup"></ng-container>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class NgxFormConstructComponent implements OnInit {

  @Input() configs!: IFieldConfig[];
  @Input() savedData?: { [s: string]: any };
  @Output() formOnSubmit = new EventEmitter<any>();
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.configs) throw new Error('configs is required');
    this.formGroup = this.buildForm(this.configs);
    if (this.savedData) {
      this.formGroup.patchValue(this.savedData);
    }
  }

  buildForm(configs: IFieldConfig[]) {
    const formGroup = this.fb.group({});
    configs.forEach(config => {

      if (config.type === 'button') return;

      if (config.type === 'array') {
        const formArray = this.fb.array<FormGroup>([]);
        if (this.savedData && this.savedData[config.array.name]) {
          this.savedData[config.array.name].forEach(() => {
            formArray.push(this.buildForm(config.array.configs));
          });
        } else {
          formArray.push(this.buildForm(config.array.configs));
        }
        formGroup.addControl(config.array.name, formArray);
      }

      if (config.type === 'input') {
        formGroup.addControl(config.input.name, this.fb.control(null));
      }

      if (config.type === 'object') {
        formGroup.addControl(config.object.name, this.buildForm(config.object.configs));
      }

      if (config.type === 'select') {
        formGroup.addControl(config.select.name, this.fb.control(''));
      }

      if (config.type === 'textarea') {
        formGroup.addControl(config.textarea.name, this.fb.control(null));
      }
    });
    return formGroup;
  }

  onSubmit() {
    this.formOnSubmit.emit(this.formGroup.value);
  }
}
