import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthCareProvidersPageRoutingModule } from 'src/app/modules/website/pages/services-page/health-care-providers-page/health-care-providers-page-routing.module';
import { HealthCareProvidersPageComponent } from 'src/app/modules/website/pages/services-page/health-care-providers-page/health-care-providers-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { TestimonialsPartialModule } from 'src/app/modules/website/partials/sections/testimonials-partial/testimonials-partial.module';
import { FeaturesThreePartialModule } from 'src/app/modules/website/partials/features-three-partial/features-three-partial.module';
import { AboutTextTwoPartialModule } from 'src/app/modules/website/partials/sections/about-text-two-partial/about-text-two-partial.module';
import { PageCta3PartialModule } from 'src/app/modules/website/partials/sections/page-cta3-partial/page-cta3-partial.module';

@NgModule({
  declarations: [HealthCareProvidersPageComponent],
  imports: [
    CommonModule,
    HealthCareProvidersPageRoutingModule,
    BannerWithTitlePartialModule,
    PageCta3PartialModule,
    TestimonialsPartialModule,
    PartnersPartialModule,
    FeaturesThreePartialModule,
    AboutTextTwoPartialModule,
  ],
})
export class HealthCareProvidersPageModule {}
