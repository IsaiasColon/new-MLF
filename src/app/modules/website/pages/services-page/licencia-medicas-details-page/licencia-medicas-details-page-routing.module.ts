import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciaMedicasDetailsPageComponent } from './licencia-medicas-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LicenciaMedicasDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciaMedicasDetailsPageRoutingModule { }
