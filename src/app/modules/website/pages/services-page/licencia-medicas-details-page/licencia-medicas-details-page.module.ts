import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenciaMedicasDetailsPageRoutingModule } from './licencia-medicas-details-page-routing.module';
import { LicenciaMedicasDetailsPageComponent } from './licencia-medicas-details-page.component';
import { BannerWithTitlePartialModule } from '../../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    LicenciaMedicasDetailsPageComponent
  ],
  imports: [
    CommonModule,
    LicenciaMedicasDetailsPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class LicenciaMedicasDetailsPageModule { }
