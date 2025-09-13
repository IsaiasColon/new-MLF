import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopServicesPartialComponent } from 'src/app/modules/website/partials/sections/pop-services-partial/pop-services-partial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PopServicesPartialComponent],
  imports: [CommonModule, NgbModule],
  exports: [PopServicesPartialComponent],
})
export class PopServicesPartialModule {}
