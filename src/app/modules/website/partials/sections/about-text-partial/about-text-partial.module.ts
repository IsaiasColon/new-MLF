import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutTextPartialComponent } from 'src/app/modules/website/partials/sections/about-text-partial/about-text-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutTextPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [AboutTextPartialComponent],
})
export class AboutTextPartialModule {}
