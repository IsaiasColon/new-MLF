import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuPartialComponent } from 'src/app/modules/website/partials/mobile-menu-partial/mobile-menu-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MobileMenuPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [MobileMenuPartialComponent],
})
export class MobileMenuPartialModule {}
