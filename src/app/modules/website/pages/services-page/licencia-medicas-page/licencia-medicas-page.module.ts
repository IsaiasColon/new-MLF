import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenciaMedicasPageRoutingModule } from './licencia-medicas-page-routing.module';
import { LicenciaMedicasPageComponent } from './licencia-medicas-page.component';
import { BannerWithTitlePartialModule } from '../../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    LicenciaMedicasPageComponent
  ],
  imports: [
    CommonModule,
    LicenciaMedicasPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class LicenciaMedicasPageModule { }
