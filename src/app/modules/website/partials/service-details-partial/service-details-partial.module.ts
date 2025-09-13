import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsPartialComponent } from 'src/app/modules/website/partials/service-details-partial/service-details-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServiceDetailsPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [ServiceDetailsPartialComponent],
})
export class ServiceDetailsPartialModule {}
