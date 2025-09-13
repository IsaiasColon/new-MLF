import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from 'src/app/modules/website/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/home-page/home-page.module'
          ).then((m) => m.HomePageModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/about-us-page/about-us-page.module'
          ).then((m) => m.AboutUsPageModule),
      },
      {
        path: 'blog/preview/:uuid',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/blog-details-page/blog-details-page.module'
          ).then((m) => m.BlogDetailsPageModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/blog-page/blog-page.module'
          ).then((m) => m.BlogPageModule),
      },
      {
        path: 'blog/:page',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/blog-page/blog-page.module'
          ).then((m) => m.BlogPageModule),
      },
      {
        path: 'blog-details/:slug',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/blog-details-page/blog-details-page.module'
          ).then((m) => m.BlogDetailsPageModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/contact-us-page/contact-us-page.module'
          ).then((m) => m.ContactUsPageModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/services-page.module'
          ).then((m) => m.ServicesPageModule),
      },
      {
        path: 'services/health-care-providers',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/health-care-providers-page/health-care-providers-page.module'
          ).then((m) => m.HealthCareProvidersPageModule),
      },
      {
        path: 'services/medical-practices',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/medical-practices-page/medical-practices-page.module'
          ).then((m) => m.MedicalPracticesPageModule),
      },
      {
        path: 'medical-investments',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/medical-investments-page/medical-investments-page.module'
          ).then((m) => m.MedicalInvestmentsPageModule),
      },
      {
        path: 'medical-investments/:slug',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/medical-investments-details-page/medical-investments-details-page.module'
          ).then((m) => m.MedicalInvestmentsDetailsPageModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
