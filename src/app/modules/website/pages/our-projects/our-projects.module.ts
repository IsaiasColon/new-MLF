import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProjectsRoutingModule } from './our-projects-routing.module';
import { OurProjectsComponent } from './our-projects.component';


@NgModule({
  declarations: [
    OurProjectsComponent
  ],
  imports: [
    CommonModule,
    OurProjectsRoutingModule
  ]
})
export class OurProjectsModule { }
