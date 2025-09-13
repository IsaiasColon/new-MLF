import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCta2PartialComponent } from 'src/app/modules/website/partials/sections/page-cta2-partial/page-cta2-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageCta2PartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageCta2PartialComponent],
})
export class PageCta2PartialModule {}
