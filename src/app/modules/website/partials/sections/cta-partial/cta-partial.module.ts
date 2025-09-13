import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaPartialComponent } from 'src/app/modules/website/partials/sections/cta-partial/cta-partial.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CtaPartialComponent],
  imports: [CommonModule, TranslateModule],
  exports: [CtaPartialComponent],
})
export class CtaPartialModule {}
