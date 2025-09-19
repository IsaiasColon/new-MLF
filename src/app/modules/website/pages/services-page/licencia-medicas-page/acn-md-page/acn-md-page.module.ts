import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcnMdPageRoutingModule } from './acn-md-page-routing.module';
import { AcnMdPageComponent } from './acn-md-page.component';


@NgModule({
  declarations: [
    AcnMdPageComponent
  ],
  imports: [
    CommonModule,
    AcnMdPageRoutingModule
  ]
})
export class AcnMdPageModule { }
