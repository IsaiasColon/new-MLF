import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { PageCta3PartialModule } from 'src/app/modules/website/partials/sections/page-cta3-partial/page-cta3-partial.module';
import { TestimonialsPartialModule } from 'src/app/modules/website/partials/sections/testimonials-partial/testimonials-partial.module';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { FeaturesThreePartialModule } from 'src/app/modules/website/partials/features-three-partial/features-three-partial.module';
import { MedicalPracticesPageRoutingModule } from 'src/app/modules/website/pages/services-page/medical-practices-page/medical-practices-page-routing.module';
import { MedicalPracticesPageComponent } from 'src/app/modules/website/pages/services-page/medical-practices-page/medical-practices-page.component';
import { AboutTextThreePartialModule } from 'src/app/modules/website/partials/sections/about-text-three-partial/about-text-three-partial.module';

@NgModule({
  declarations: [MedicalPracticesPageComponent],
  imports: [
    CommonModule,
    MedicalPracticesPageRoutingModule,
    BannerWithTitlePartialModule,
    PageCta3PartialModule,
    TestimonialsPartialModule,
    PartnersPartialModule,
    FeaturesThreePartialModule,
    AboutTextThreePartialModule,
  ],
})
export class MedicalPracticesPageModule {}
