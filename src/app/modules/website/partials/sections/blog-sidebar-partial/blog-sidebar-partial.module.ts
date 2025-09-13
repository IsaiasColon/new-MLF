import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSidebarPartialComponent } from 'src/app/modules/website/partials/sections/blog-sidebar-partial/blog-sidebar-partial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogSidebarPartialComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [BlogSidebarPartialComponent],
})
export class BlogSidebarPartialModule {}
