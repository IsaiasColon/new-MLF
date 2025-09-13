import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersPartialComponent } from 'src/app/modules/website/partials/sections/partners-partial/partners-partial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [PartnersPartialComponent],
  imports: [CommonModule, CarouselModule],
  exports: [PartnersPartialComponent],
})
export class PartnersPartialModule {}
