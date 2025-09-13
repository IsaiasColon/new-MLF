import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPartialComponent } from 'src/app/modules/website/partials/sections/portfolio-partial/portfolio-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PortfolioPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [PortfolioPartialComponent],
})
export class PortfolioPartialModule {}
