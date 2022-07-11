import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'form-control-basic', pathMatch: 'full' },
  { path: 'form-control-basic', loadChildren: () => import('./modules/view-form-control-basic/view-form-control-basic.module').then(m => m.ViewFormControlBasicModule) },
  { path: '**', redirectTo: 'textarea' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
