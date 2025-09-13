import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesThreePartialComponent } from 'src/app/modules/website/partials/features-three-partial/features-three-partial.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FeaturesThreePartialComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [FeaturesThreePartialComponent],
})
export class FeaturesThreePartialModule {}
