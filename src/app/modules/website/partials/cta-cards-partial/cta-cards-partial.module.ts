import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaCardsPartialComponent } from 'src/app/modules/website/partials/cta-cards-partial/cta-cards-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CtaCardsPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [CtaCardsPartialComponent],
})
export class CtaCardsPartialModule {}
