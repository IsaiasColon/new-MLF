import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPartialComponent } from 'src/app/modules/website/partials/header-partial/header-partial.component';
import { RouterModule } from '@angular/router';
import { SearchPartialModule } from 'src/app/modules/website/partials/search-partial/search-partial.module';
import { MobileMenuPartialModule } from 'src/app/modules/website/partials/mobile-menu-partial/mobile-menu-partial.module';
import { NgxLoadingModule } from 'ngx-loading';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderPartialComponent],
  imports: [
    CommonModule,
    RouterModule,
    SearchPartialModule,
    MobileMenuPartialModule,
    NgxLoadingModule,
    TranslateModule,
  ],
  exports: [HeaderPartialComponent],
})
export class HeaderPartialModule {}
