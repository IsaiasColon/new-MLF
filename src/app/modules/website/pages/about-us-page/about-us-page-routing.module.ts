import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from 'src/app/modules/website/pages/about-us-page/about-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsPageRoutingModule {}
