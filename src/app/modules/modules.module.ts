import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from 'src/app/modules/modules-routing.module';
import { ModulesComponent } from 'src/app/modules/modules.component';

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, ModulesRoutingModule],
})
export class ModulesModule {}
