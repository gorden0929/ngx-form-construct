import { Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { IFieldConfig } from '../interfaces/field.interface';

export const HtmlElementMap: { component: Type<any>; map: string[] }[] = [];

export function HtmlComponent(config: { map: string[] }) {
  return (target: Type<any>) => {
    HtmlElementMap.push({ component: target, map: config.map });
  };
}

@Directive({
  selector: '[formField]'
})
export class FormFieldDirective implements OnInit {

  @Input() config!: IFieldConfig;
  @Input() formGroup?: FormGroup;
  @Input() abstractControl?: AbstractControl;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    let component: Type<any> | null = null;
    HtmlElementMap.filter((v) => v.map.indexOf(this.config.type) > -1).forEach(
      (v) => {
        if (component === null) component = v.component;
      }
    );
    if (component) {
      const componentRef = this.viewContainerRef.createComponent<IField>(component);
      componentRef.instance.config = this.config;
      componentRef.instance.formGroup = (this.formGroup ?? this.abstractControl) as FormGroup;
    }
  }
}

interface IField {
  config: any;
  formGroup: FormGroup;
  abstractControl: AbstractControl;
}