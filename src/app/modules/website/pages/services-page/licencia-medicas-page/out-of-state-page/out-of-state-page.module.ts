import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutOfStatePageRoutingModule } from './out-of-state-page-routing.module';
import { OutOfStatePageComponent } from './out-of-state-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    OutOfStatePageComponent
  ],
  imports: [
    CommonModule,
    OutOfStatePageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class OutOfStatePageModule { }
