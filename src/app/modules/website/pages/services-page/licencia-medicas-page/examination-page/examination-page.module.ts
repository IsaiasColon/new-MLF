import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationPageRoutingModule } from './examination-page-routing.module';
import { ExaminationPageComponent } from './examination-page.component';


@NgModule({
  declarations: [
    ExaminationPageComponent
  ],
  imports: [
    CommonModule,
    ExaminationPageRoutingModule
  ]
})
export class ExaminationPageModule { }
