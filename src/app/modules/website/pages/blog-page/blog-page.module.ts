import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from 'src/app/modules/website/pages/blog-page/blog-page.component';
import { BlogPageRoutingModule } from 'src/app/modules/website/pages/blog-page/blog-page-routing.module';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { BlogStandardOnePartialModule } from 'src/app/modules/website/partials/sections/blog-standard-one-partial/blog-standard-one-partial.module';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    BannerWithTitlePartialModule,
    BlogStandardOnePartialModule,
  ],
})
export class BlogPageModule {}
