import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsPartialComponent } from 'src/app/modules/website/partials/sections/testimonials-partial/testimonials-partial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [TestimonialsPartialComponent],
  imports: [CommonModule, CarouselModule],
  exports: [TestimonialsPartialComponent],
})
export class TestimonialsPartialModule {}
