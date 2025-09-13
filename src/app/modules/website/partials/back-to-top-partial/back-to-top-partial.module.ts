import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopPartialComponent } from 'src/app/modules/website/partials/back-to-top-partial/back-to-top-partial.component';

@NgModule({
  declarations: [BackToTopPartialComponent],
  imports: [CommonModule],
  exports: [BackToTopPartialComponent],
})
export class BackToTopPartialModule {}
