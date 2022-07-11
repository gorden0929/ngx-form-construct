import { Component, OnInit } from '@angular/core';
import { HtmlComponent } from '../../directives/form-field.directive';
import { IFieldButton } from '../../interfaces/field.interface';

@HtmlComponent({ map: ['button'] })
@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  config!: IFieldButton;

  constructor() { }

  ngOnInit(): void {
  }

}
