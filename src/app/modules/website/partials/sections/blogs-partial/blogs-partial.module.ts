import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsPartialComponent } from 'src/app/modules/website/partials/sections/blogs-partial/blogs-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogsPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [BlogsPartialComponent],
})
export class BlogsPartialModule {}
