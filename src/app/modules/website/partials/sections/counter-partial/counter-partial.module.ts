import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPartialComponent } from 'src/app/modules/website/partials/sections/counter-partial/counter-partial.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [CounterPartialComponent],
  imports: [CommonModule, CountUpModule],
  exports: [CounterPartialComponent],
})
export class CounterPartialModule {}
