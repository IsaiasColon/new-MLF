import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurProjectsPageComponent } from './our-projects-page.component';

const routes: Routes = [
  {
        path: '',
        component: OurProjectsPageComponent,
        children: [],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProjectsPageRoutingModule { }
