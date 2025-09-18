import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProjectsPageRoutingModule } from './our-projects-page-routing.module';
import { OurProjectsPageComponent } from './our-projects-page.component';
import { BannerWithTitlePartialModule } from '../../partials/banner-with-title-partial/banner-with-title-partial.module';
import { BlogStandardOnePartialModule } from '../../partials/sections/blog-standard-one-partial/blog-standard-one-partial.module';


@NgModule({
  declarations: [
    OurProjectsPageComponent
  ],
  imports: [
    CommonModule,
    OurProjectsPageRoutingModule,
    BannerWithTitlePartialModule,
    BlogStandardOnePartialModule,
  ]
})
export class OurProjectsPageModule { }
