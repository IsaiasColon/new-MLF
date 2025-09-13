import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPartialComponent } from 'src/app/modules/website/partials/sections/services-partial/services-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServicesPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [ServicesPartialComponent],
})
export class ServicesPartialModule {}
