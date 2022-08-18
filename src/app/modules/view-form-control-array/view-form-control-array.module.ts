import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFormControlArrayRoutingModule } from './view-form-control-array-routing.module';
import { ViewFormControlArrayComponent } from './view-form-control-array.component';
import { NgxFormConstructModule } from 'projects/ngx-form-construct/src/public-api';


@NgModule({
  declarations: [
    ViewFormControlArrayComponent
  ],
  imports: [
    CommonModule,
    ViewFormControlArrayRoutingModule,
    NgxFormConstructModule
  ]
})
export class ViewFormControlArrayModule { }
