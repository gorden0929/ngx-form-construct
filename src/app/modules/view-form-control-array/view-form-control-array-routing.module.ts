import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFormControlArrayComponent } from './view-form-control-array.component';

const routes: Routes = [{ path: '', component: ViewFormControlArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFormControlArrayRoutingModule { }
