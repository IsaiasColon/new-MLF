import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationPageRoutingModule } from './examination-page-routing.module';
import { ExaminationPageComponent } from './examination-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    ExaminationPageComponent
  ],
  imports: [
    CommonModule,
    ExaminationPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class ExaminationPageModule { }
