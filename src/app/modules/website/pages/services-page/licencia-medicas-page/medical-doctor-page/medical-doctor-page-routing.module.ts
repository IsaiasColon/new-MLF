import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDoctorPageComponent } from './medical-doctor-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalDoctorPageComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalDoctorPageRoutingModule { }
