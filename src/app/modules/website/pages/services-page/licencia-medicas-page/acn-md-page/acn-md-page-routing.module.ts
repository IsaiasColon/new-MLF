import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcnMdPageComponent } from './acn-md-page.component';

const routes: Routes = [
  {
    path: '',
    component: AcnMdPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnMdPageRoutingModule { }
