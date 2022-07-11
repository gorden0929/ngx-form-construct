import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxFormConstructComponent } from './ngx-form-construct.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ArrayComponent } from './components/array/array.component';
import { ObjectComponent } from './components/object/object.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    NgxFormConstructComponent,
    FormFieldDirective,
    InputComponent,
    ButtonComponent,
    ArrayComponent,
    ObjectComponent,
    TextareaComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxFormConstructComponent
  ]
})
export class NgxFormConstructModule { }
