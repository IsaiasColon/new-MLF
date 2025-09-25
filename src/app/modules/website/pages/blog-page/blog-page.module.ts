import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BlogPageComponent } from './blog-page.component';
import { BlogService } from '../../services/blog.service';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  }
];

@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BlogService
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogPageModule { }