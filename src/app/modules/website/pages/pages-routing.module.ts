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
      // {
      //   path: 'blog/preview/:uuid',
      //   loadChildren: () =>
      //     import(
      //       'src/app/modules/website/pages/blog-details-page/blog-details-page.module'
      //     ).then((m) => m.BlogDetailsPageModule),
      // },
      {
        path: 'blog',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/blog-page/blog-page.module'
          ).then((m) => m.BlogPageModule),
      },
      // {
      //   path: 'blog/:page',
      //   loadChildren: () =>
      //     import(
      //       'src/app/modules/website/pages/blog-details-page/blog-details-page.module'
      //     ).then((m) => m.BlogDetailsPageModule),
      // },
      {
        path: 'blog/:slug',
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
        path: 'services/licencia-medicas',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/licencia-medicas-page.module'
          ).then((m) => m.LicenciaMedicasPageModule),
      },
      // {
      //   path: 'services/licencia-medicas/:slug',
      //   loadChildren: () =>
      //     import(
      //       'src/app/modules/website/pages/services-page/licencia-medicas-details-page/licencia-medicas-details-page.module'
      //     ).then((m) => m.LicenciaMedicasDetailsPageModule),
      // },
      {
        path: 'services/licencia-medicas/licencia-de-acn-md',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/acn-md-page/acn-md-page.module'
          ).then((m) => m.AcnMdPageModule),
      },
      {
        path: 'services/licencia-medicas/licencia-de-acnpa',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/acnpa-page/acnpa-page.module'
          ).then((m) => m.AcnpaPageModule),
      },
      {
        path: 'services/licencia-medicas/licencia-out-of-state-telehealth-provider-registration',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/out-of-state-page/out-of-state-page.module'
          ).then((m) => m.OutOfStatePageModule),
      },
      {
        path: 'services/licencia-medicas/licencia-medical-doctor-by-mobile-endorsement',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/medical-doctor-page/medical-doctor-page.module'
          ).then((m) => m.MedicalDoctorPageModule),
      },
      {
        path: 'services/licencia-medicas/licencia-por-examinacion',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/licencia-medicas-page/examination-page/examination-page.module'
          ).then((m) => m.ExaminationPageModule),
      },
      {
        path: 'services/reclutamiento',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/reclutamiento-page/reclutamiento-page.module'
          ).then((m) => m.ReclutamientoPageModule),
      },
      {
        path: 'services/facturacion',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/facturacion-page/facturacion-page.module'
          ).then((m) => m.FacturacionPageModule),
      },
      {
        path: 'services/marketing-and-branding',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/services-page/marketing-and-branding-page/marketing-and-branding-page.module'
          ).then((m) => m.MarketingAndBrandingPageModule),
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
      {
        path: 'our-projects',
        loadChildren: () =>
          import(
            'src/app/modules/website/pages/our-projects-page/our-projects-page.module'
          ).then((m) => m.OurProjectsPageModule),
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
