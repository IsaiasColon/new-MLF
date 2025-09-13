import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalInvestmentsDetailsPageRoutingModule } from 'src/app/modules/website/pages/medical-investments-details-page/medical-investments-details-page-routing.module';
import { MedicalInvestmentsDetailsPageComponent } from 'src/app/modules/website/pages/medical-investments-details-page/medical-investments-details-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';
import { ServiceDetailsPartialModule } from 'src/app/modules/website/partials/service-details-partial/service-details-partial.module';

@NgModule({
  declarations: [MedicalInvestmentsDetailsPageComponent],
  imports: [
    CommonModule,
    MedicalInvestmentsDetailsPageRoutingModule,
    BannerWithTitlePartialModule,
    ServiceDetailsPartialModule,
  ],
})
export class MedicalInvestmentsDetailsPageModule {}
