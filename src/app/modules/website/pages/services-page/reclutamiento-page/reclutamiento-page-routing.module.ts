import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclutamientoPageComponent } from './reclutamiento-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReclutamientoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclutamientoPageRoutingModule { }
