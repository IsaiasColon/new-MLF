import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnMdPageRoutingModule } from './acn-md-page-routing.module';
import { AcnMdPageComponent } from './acn-md-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    AcnMdPageComponent
  ],
  imports: [
    CommonModule,
    AcnMdPageRoutingModule,    
    BannerWithTitlePartialModule
  ]
})
export class AcnMdPageModule { }
