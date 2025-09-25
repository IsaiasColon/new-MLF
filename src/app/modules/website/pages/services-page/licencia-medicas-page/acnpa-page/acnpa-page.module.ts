import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnpaPageRoutingModule } from './acnpa-page-routing.module';
import { AcnpaPageComponent } from './acnpa-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    AcnpaPageComponent
  ],
  imports: [
    CommonModule,
    AcnpaPageRoutingModule,    
    BannerWithTitlePartialModule
  ]
})
export class AcnpaPageModule { }
