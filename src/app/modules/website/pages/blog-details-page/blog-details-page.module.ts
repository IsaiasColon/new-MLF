import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsPageComponent } from 'src/app/modules/website/pages/blog-details-page/blog-details-page.component';
import { BlogDetailsPageRoutingModule } from 'src/app/modules/website/pages/blog-details-page/blog-details-page-routing.module';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { BlogDetailsPartialModule } from 'src/app/modules/website/partials/sections/blog-details-partial/blog-details-partial.module';

@NgModule({
  declarations: [BlogDetailsPageComponent],
  imports: [
    CommonModule,
    BlogDetailsPageRoutingModule,
    BannerWithTitlePartialModule,
    BlogDetailsPartialModule,
  ],
})
export class BlogDetailsPageModule {}
