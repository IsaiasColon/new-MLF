import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from 'src/app/modules/website/pages/services-page/services-page-routing.module';
import { ServicesPageComponent } from 'src/app/modules/website/pages/services-page/services-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { PartnersPartialModule } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.module';
import { PortfolioPartialModule } from 'src/app/modules/website/partials/sections/portfolio-partial/portfolio-partial.module';

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    BannerWithTitlePartialModule,
    PortfolioPartialModule,
    PartnersPartialModule,
  ],
})
export class ServicesPageModule {}
