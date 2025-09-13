import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from 'src/app/modules/website/pages/home-page/home-page-routing.module';
import { HomePageComponent } from 'src/app/modules/website/pages/home-page/home-page.component';
import { BannerPartialModule } from 'src/app/modules/website/partials/sections/banner-partial/banner-partial.module';
import { CtaPartialModule } from 'src/app/modules/website/partials/sections/cta-partial/cta-partial.module';
import { AboutTextPartialModule } from 'src/app/modules/website/partials/sections/about-text-partial/about-text-partial.module';
import { ServicesPartialModule } from 'src/app/modules/website/partials/sections/services-partial/services-partial.module';
import { CounterPartialModule } from 'src/app/modules/website/partials/sections/counter-partial/counter-partial.module';
import { PopServicesPartialModule } from 'src/app/modules/website/partials/sections/pop-services-partial/pop-services-partial.module';
import { TeamPartialModule } from 'src/app/modules/website/partials/sections/team-partial/team-partial.module';
import { PageCtaPartialModule } from 'src/app/modules/website/partials/sections/page-cta-partial/page-cta-partial.module';
import { TestimonialsPartialModule } from 'src/app/modules/website/partials/sections/testimonials-partial/testimonials-partial.module';
import { BlogsPartialModule } from 'src/app/modules/website/partials/sections/blogs-partial/blogs-partial.module';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { InfoBlocksPartialModule } from 'src/app/modules/website/partials/sections/info-blocks-partial/info-blocks-partial.module';
import { PageCta2PartialModule } from 'src/app/modules/website/partials/sections/page-cta2-partial/page-cta2-partial.module';
import { PortfolioPartialModule } from 'src/app/modules/website/partials/sections/portfolio-partial/portfolio-partial.module';
import { ContactFormPartialModule } from 'src/app/modules/website/partials/sections/contact-form-partial/contact-form-partial.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    BannerPartialModule,
    CtaPartialModule,
    AboutTextPartialModule,
    ServicesPartialModule,
    CounterPartialModule,
    PopServicesPartialModule,
    TeamPartialModule,
    PageCtaPartialModule,
    PageCta2PartialModule,
    TestimonialsPartialModule,
    BlogsPartialModule,
    PartnersPartialModule,
    InfoBlocksPartialModule,
    PortfolioPartialModule,
    ContactFormPartialModule,
  ],
})
export class HomePageModule {}
