import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalInvestmentsPageRoutingModule } from 'src/app/modules/website/pages/medical-investments-page/medical-investments-page-routing.module';
import { MedicalInvestmentsPageComponent } from 'src/app/modules/website/pages/medical-investments-page/medical-investments-page.component';
import { BannerPartialModule } from 'src/app/modules/website/partials/sections/banner-partial/banner-partial.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { ContentWithImagePartialModule } from 'src/app/modules/website/partials/content-with-image-partial/content-with-image-partial.module';
import { CtaCardsPartialModule } from 'src/app/modules/website/partials/cta-cards-partial/cta-cards-partial.module';

@NgModule({
  declarations: [MedicalInvestmentsPageComponent],
  imports: [
    CommonModule,
    MedicalInvestmentsPageRoutingModule,
    BannerPartialModule,
    NgxUsefulSwiperModule,
    PartnersPartialModule,
    BannerWithTitlePartialModule,
    ContentWithImagePartialModule,
    CtaCardsPartialModule,
  ],
})
export class MedicalInvestmentsPageModule {}
