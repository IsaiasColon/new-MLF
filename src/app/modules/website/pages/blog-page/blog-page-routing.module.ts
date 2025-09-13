import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from 'src/app/modules/website/pages/blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
