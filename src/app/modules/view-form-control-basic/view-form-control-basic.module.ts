import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFormControlBasicRoutingModule } from './view-form-control-basic-routing.module';
import { ViewFormControlBasicComponent } from './view-form-control-basic.component';
import { NgxFormConstructModule } from 'projects/ngx-form-construct/src/public-api';


@NgModule({
  declarations: [
    ViewFormControlBasicComponent
  ],
  imports: [
    CommonModule,
    ViewFormControlBasicRoutingModule,
    NgxFormConstructModule
  ]
})
export class ViewFormControlBasicModule { }
