import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPartialComponent } from 'src/app/modules/website/partials/footer-partial/footer-partial.component';
import { BackToTopPartialModule } from 'src/app/modules/website/partials/back-to-top-partial/back-to-top-partial.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CtaPartialModule } from 'src/app/modules/website/partials/sections/cta-partial/cta-partial.module';

@NgModule({
  declarations: [FooterPartialComponent],
  imports: [
    CommonModule,
    BackToTopPartialModule,
    RouterModule,
    CtaPartialModule,
  ],
  exports: [FooterPartialComponent],
})
export class FooterPartialModule {}
