import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsPageComponent } from 'src/app/modules/website/pages/blog-details-page/blog-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailsPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogDetailsPageRoutingModule {}
