import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclutamientoPageRoutingModule } from './reclutamiento-page-routing.module';
import { ReclutamientoPageComponent } from './reclutamiento-page.component';
import { BannerWithTitlePartialModule } from '../../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    ReclutamientoPageComponent
  ],
  imports: [
    CommonModule,
    ReclutamientoPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class ReclutamientoPageModule { }
