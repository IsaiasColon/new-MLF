import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciaMedicasPageComponent } from './licencia-medicas-page.component';

const routes: Routes = [
  {
    path: '',
    component: LicenciaMedicasPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciaMedicasPageRoutingModule { }
