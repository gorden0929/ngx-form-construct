import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldObject } from '../../interfaces/field.interface';

@HtmlComponent({ map: ['object'] })
@Component({
  selector: 'form-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  config!: IFieldObject;
  formGroup!: FormGroup;
  newFormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formGroup.value);

    this.newFormGroup = this.formGroup.controls[this.config.object.name] as FormGroup;
  }

}
