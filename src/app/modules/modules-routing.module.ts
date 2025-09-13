import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from 'src/app/modules/modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/website/website.module').then(
            (m) => m.WebsiteModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
