import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareProvidersPageComponent } from 'src/app/modules/website/pages/services-page/health-care-providers-page/health-care-providers-page.component';

const routes: Routes = [
  {
    path: '',
    component: HealthCareProvidersPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCareProvidersPageRoutingModule {}
