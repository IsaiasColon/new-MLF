import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageComponent } from 'src/app/modules/website/pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsPageRoutingModule {}
