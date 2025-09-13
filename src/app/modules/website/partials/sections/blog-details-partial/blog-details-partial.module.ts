import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSidebarPartialModule } from 'src/app/modules/website/partials/sections/blog-sidebar-partial/blog-sidebar-partial.module';
import { BlogDetailsPartialComponent } from 'src/app/modules/website/partials/sections/blog-details-partial/blog-details-partial.component';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [BlogDetailsPartialComponent],
  imports: [
    CommonModule,
    BlogSidebarPartialModule,
    RouterModule,
    BlogSidebarPartialModule,
    NgxLoadingModule,
  ],
  exports: [BlogDetailsPartialComponent],
})
export class BlogDetailsPartialModule {}
