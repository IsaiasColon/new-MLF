import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingAndBrandingPageComponent } from './marketing-and-branding-page.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingAndBrandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingAndBrandingPageRoutingModule { }
