import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationPageComponent } from './examination-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExaminationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationPageRoutingModule { }
