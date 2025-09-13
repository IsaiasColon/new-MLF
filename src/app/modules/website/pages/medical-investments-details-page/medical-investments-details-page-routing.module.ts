import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInvestmentsDetailsPageComponent } from 'src/app/modules/website/pages/medical-investments-details-page/medical-investments-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalInvestmentsDetailsPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalInvestmentsDetailsPageRoutingModule {}
