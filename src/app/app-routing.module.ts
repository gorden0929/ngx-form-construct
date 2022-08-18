import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', loadChildren: () => import('./modules/view-form-control-basic/view-form-control-basic.module').then(m => m.ViewFormControlBasicModule) },
  { path: 'array', loadChildren: () => import('./modules/view-form-control-array/view-form-control-array.module').then(m => m.ViewFormControlArrayModule) },
  { path: '**', redirectTo: 'basic' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
