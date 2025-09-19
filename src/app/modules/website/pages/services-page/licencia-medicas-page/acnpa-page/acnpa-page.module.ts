import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnpaPageRoutingModule } from './acnpa-page-routing.module';
import { AcnpaPageComponent } from './acnpa-page.component';


@NgModule({
  declarations: [
    AcnpaPageComponent
  ],
  imports: [
    CommonModule,
    AcnpaPageRoutingModule
  ]
})
export class AcnpaPageModule { }
