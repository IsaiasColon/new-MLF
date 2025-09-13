import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkProcessPartialComponent } from 'src/app/modules/website/partials/work-process-partial/work-process-partial.component';

@NgModule({
  declarations: [WorkProcessPartialComponent],
  imports: [CommonModule],
  exports: [WorkProcessPartialComponent],
})
export class WorkProcessPartialModule {}
