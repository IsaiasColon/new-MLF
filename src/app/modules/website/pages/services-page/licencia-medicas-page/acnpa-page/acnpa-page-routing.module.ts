import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcnpaPageComponent } from './acnpa-page.component';

const routes: Routes = [
  {
    path: '',
    component: AcnpaPageComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnpaPageRoutingModule { }
