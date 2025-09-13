import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInvestmentsPageComponent } from 'src/app/modules/website/pages/medical-investments-page/medical-investments-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalInvestmentsPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalInvestmentsPageRoutingModule {}
