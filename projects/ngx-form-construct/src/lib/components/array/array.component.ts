import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldArray } from '../../interfaces/field.interface';
import { CommonService } from '../../services/common.service';

@HtmlComponent({ map: ['array'] })
@Component({
  selector: 'form-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  config!: IFieldArray;
  formGroup!: FormGroup
  formArray!: FormArray;

  constructor(private privateCommonService: CommonService) { }

  ngOnInit(): void {
    this.formArray = this.formGroup.controls[this.config.array.name] as FormArray;
  }

  addElement(): void {
    this.formArray.push(this.privateCommonService.buildForm(this.config.array.configs));
  }

  removeElement(index: number): void {
    this.formArray.removeAt(index);
  }

}
