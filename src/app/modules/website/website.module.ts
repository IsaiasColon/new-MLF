import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from 'src/app/modules/website/website-routing.module';
import { WebsiteComponent } from 'src/app/modules/website/website.component';
import { HeaderPartialModule } from 'src/app/modules/website/partials/header-partial/header-partial.module';
import { FooterPartialModule } from 'src/app/modules/website/partials/footer-partial/footer-partial.module';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    HeaderPartialModule,
    FooterPartialModule,
  ],
})
export class WebsiteModule {}
