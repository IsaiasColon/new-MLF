import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalDoctorPageRoutingModule } from './medical-doctor-page-routing.module';
import { MedicalDoctorPageComponent } from './medical-doctor-page.component';


@NgModule({
  declarations: [
    MedicalDoctorPageComponent
  ],
  imports: [
    CommonModule,
    MedicalDoctorPageRoutingModule
  ]
})
export class MedicalDoctorPageModule { }
