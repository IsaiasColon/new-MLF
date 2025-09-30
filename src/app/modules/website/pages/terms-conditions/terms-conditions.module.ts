import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { BannerWithTitlePartialModule } from '../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    
    BannerWithTitlePartialModule,
  ]
})
export class TermsConditionsModule { }
