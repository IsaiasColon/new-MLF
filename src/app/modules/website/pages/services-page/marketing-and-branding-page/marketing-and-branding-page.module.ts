import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingAndBrandingPageRoutingModule } from './marketing-and-branding-page-routing.module';
import { MarketingAndBrandingPageComponent } from './marketing-and-branding-page.component';
import { BannerWithTitlePartialModule } from '../../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    MarketingAndBrandingPageComponent
  ],
  imports: [
    CommonModule,
    MarketingAndBrandingPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class MarketingAndBrandingPageModule { }
