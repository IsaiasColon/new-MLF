import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from 'src/app/modules/website/pages/services-page/services-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}
