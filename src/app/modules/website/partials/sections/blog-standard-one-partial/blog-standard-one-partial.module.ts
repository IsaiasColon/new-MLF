import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogStandardOnePartialComponent } from 'src/app/modules/website/partials/sections/blog-standard-one-partial/blog-standard-one-partial.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogSidebarPartialModule } from 'src/app/modules/website/partials/sections/blog-sidebar-partial/blog-sidebar-partial.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [BlogStandardOnePartialComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule,
    BlogSidebarPartialModule,
    NgxLoadingModule,
  ],
  exports: [BlogStandardOnePartialComponent],
})
export class BlogStandardOnePartialModule {}
