import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPartialComponent } from 'src/app/modules/website/partials/sections/team-partial/team-partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamPartialComponent],
  imports: [CommonModule, RouterModule],
  exports: [TeamPartialComponent],
})
export class TeamPartialModule {}
