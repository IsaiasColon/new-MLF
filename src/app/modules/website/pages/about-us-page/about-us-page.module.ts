import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageRoutingModule } from 'src/app/modules/website/pages/about-us-page/about-us-page-routing.module';
import { AboutUsPageComponent } from 'src/app/modules/website/pages/about-us-page/about-us-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { WorkProcessPartialModule } from 'src/app/modules/website/partials/work-process-partial/work-process-partial.module';
import { CtaCardsPartialModule } from 'src/app/modules/website/partials/cta-cards-partial/cta-cards-partial.module';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { ImageWithTextPartialModule } from 'src/app/modules/website/partials/global/image-with-text-partial/image-with-text-partial.module';
import { TeamPartialModule } from 'src/app/modules/website/partials/sections/team-partial/team-partial.module';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    CommonModule,
    AboutUsPageRoutingModule,
    BannerWithTitlePartialModule,
    WorkProcessPartialModule,
    CtaCardsPartialModule,
    ImageWithTextPartialModule,
    PartnersPartialModule,
    TeamPartialModule,
  ],
})
export class AboutUsPageModule {}
