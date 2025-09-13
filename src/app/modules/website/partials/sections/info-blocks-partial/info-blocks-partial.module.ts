import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBlocksPartialComponent } from 'src/app/modules/website/partials/sections/info-blocks-partial/info-blocks-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InfoBlocksPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [InfoBlocksPartialComponent],
})
export class InfoBlocksPartialModule {}
