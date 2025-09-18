import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionPageComponent } from './facturacion-page.component';

const routes: Routes = [
  {
    path: '',
    component: FacturacionPageComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionPageRoutingModule { }
