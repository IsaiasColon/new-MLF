import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalDoctorPageRoutingModule } from './medical-doctor-page-routing.module';
import { MedicalDoctorPageComponent } from './medical-doctor-page.component';
import { BannerWithTitlePartialModule } from 'src/app/modules/website/partials/banner-with-title-partial/banner-with-title-partial.module';


@NgModule({
  declarations: [
    MedicalDoctorPageComponent
  ],
  imports: [
    CommonModule,
    MedicalDoctorPageRoutingModule,
    BannerWithTitlePartialModule
  ]
})
export class MedicalDoctorPageModule { }
