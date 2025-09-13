import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsPageComponent } from 'src/app/modules/website/pages/contact-us-page/contact-us-page.component';
import { ContactUsPageRoutingModule } from 'src/app/modules/website/pages/contact-us-page/contact-us-page-routing.module';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { ContactFormPartialModule } from 'src/app/modules/website/partials/sections/contact-form-partial/contact-form-partial.module';

@NgModule({
  declarations: [ContactUsPageComponent],
  imports: [
    CommonModule,
    ContactUsPageRoutingModule,
    BannerWithTitlePartialModule,
    ContactFormPartialModule,
  ],
})
export class ContactUsPageModule {}
