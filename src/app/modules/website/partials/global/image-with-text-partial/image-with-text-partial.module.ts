import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWithTextPartialComponent } from 'src/app/modules/website/partials/global/image-with-text-partial/image-with-text-partial.component';

@NgModule({
  declarations: [ImageWithTextPartialComponent],
  imports: [CommonModule],
  exports: [ImageWithTextPartialComponent],
})
export class ImageWithTextPartialModule {}
