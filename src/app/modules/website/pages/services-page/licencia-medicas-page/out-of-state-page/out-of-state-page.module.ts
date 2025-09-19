import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutOfStatePageRoutingModule } from './out-of-state-page-routing.module';
import { OutOfStatePageComponent } from './out-of-state-page.component';


@NgModule({
  declarations: [
    OutOfStatePageComponent
  ],
  imports: [
    CommonModule,
    OutOfStatePageRoutingModule
  ]
})
export class OutOfStatePageModule { }
