import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPartialComponent } from 'src/app/modules/website/partials/search-partial/search-partial.component';

@NgModule({
  declarations: [SearchPartialComponent],
  imports: [CommonModule],
  exports: [SearchPartialComponent],
})
export class SearchPartialModule {}
