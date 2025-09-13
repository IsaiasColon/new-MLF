import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerPartialComponent } from 'src/app/modules/website/partials/sections/banner-partial/banner-partial.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BannerPartialComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BannerPartialComponent],
})
export class BannerPartialModule {}
