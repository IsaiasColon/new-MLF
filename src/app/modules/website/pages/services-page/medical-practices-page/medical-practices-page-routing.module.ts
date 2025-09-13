import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalPracticesPageComponent } from 'src/app/modules/website/pages/services-page/medical-practices-page/medical-practices-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalPracticesPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalPracticesPageRoutingModule {}
