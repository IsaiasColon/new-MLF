import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutOfStatePageComponent } from './out-of-state-page.component';

const routes: Routes = [
  {
    path: '',
    component: OutOfStatePageComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutOfStatePageRoutingModule { }
