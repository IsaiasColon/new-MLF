import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerWithTitlePartialComponent } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [BannerWithTitlePartialComponent],
  imports: [CommonModule, NgxUsefulSwiperModule],
  exports: [BannerWithTitlePartialComponent],
})
export class BannerWithTitlePartialModule {}
