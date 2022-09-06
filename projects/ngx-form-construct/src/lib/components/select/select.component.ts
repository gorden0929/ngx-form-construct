import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldSelect } from '../../interfaces/field.interface';

@HtmlComponent({ map: ['select'] })
@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  config!: IFieldSelect;
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void { }

}
