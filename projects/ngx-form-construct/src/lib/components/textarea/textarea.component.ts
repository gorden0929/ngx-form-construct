import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldTextarea } from '../../interfaces/field.interface';

@HtmlComponent({ map: ['textarea'] })
@Component({
  selector: 'form-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  config!: IFieldTextarea;
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
