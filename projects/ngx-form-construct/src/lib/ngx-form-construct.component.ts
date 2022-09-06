import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFieldConfig } from './interfaces/field.interface';
import { CommonService } from './services/common.service';

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

  constructor(private privateCommonService: CommonService) { }

  ngOnInit(): void {
    if (!this.configs) throw new Error('configs is required');
    this.formGroup = this.privateCommonService.buildForm(this.configs);
    if (this.savedData) {
      this.formGroup.patchValue(this.savedData);
    }
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    this.formOnSubmit.emit(this.formGroup.value);
  }
}
