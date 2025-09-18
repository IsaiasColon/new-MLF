import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionPageRoutingModule } from './facturacion-page-routing.module';
import { FacturacionPageComponent } from './facturacion-page.component';
import { BannerWithTitlePartialModule } from '../../../partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    FacturacionPageComponent
  ],
  imports: [
    CommonModule,
    FacturacionPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class FacturacionPageModule { }
