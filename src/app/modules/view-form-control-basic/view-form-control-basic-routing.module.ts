import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFormControlBasicComponent } from './view-form-control-basic.component';

const routes: Routes = [{ path: '', component: ViewFormControlBasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFormControlBasicRoutingModule { }
