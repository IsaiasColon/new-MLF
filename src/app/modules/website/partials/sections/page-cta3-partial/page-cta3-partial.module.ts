import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCta3PartialComponent } from 'src/app/modules/website/partials/sections/page-cta3-partial/page-cta3-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageCta3PartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageCta3PartialComponent],
})
export class PageCta3PartialModule {}
