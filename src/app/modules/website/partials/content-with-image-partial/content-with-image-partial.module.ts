import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWithImagePartialComponent } from 'src/app/modules/website/partials/content-with-image-partial/content-with-image-partial.component';

@NgModule({
  declarations: [ContentWithImagePartialComponent],
  imports: [CommonModule],
  exports: [ContentWithImagePartialComponent],
})
export class ContentWithImagePartialModule {}
