import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldArray } from '../../interfaces/field.interface';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.formGroup.controls[this.config.array.name].value);

    this.formArray = this.formGroup.controls[this.config.array.name] as FormArray;
  }

}
