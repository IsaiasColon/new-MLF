import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-header-partial',
  templateUrl: './header-partial.component.html',
  styleUrls: ['./header-partial.component.scss'],
})
export class HeaderPartialComponent implements OnInit, OnDestroy {
  canLanguageSwitch: boolean = true;

  public loading: boolean = false;

  public currentLang: string | null = null;

  public navigation: Array<any> = [];

  public navigation_en: Array<any> = [
    {
      id: 1,
      link: '/',
      linkText: 'Home',
    },
    {
      id: 2,
      link: '/about-us',
      linkText: 'About us',
    },
    {
      id: 3,
      link: '/services',
      linkText: 'Services',
      child: true,
      submenu: [
        {
          id: 3.1,
          link: '/services/licencia-medicas',
          linkText: 'Medical Licenses',
          child: true,
          submenu: [
            {
              id: `3.1.1`,
              link: '/services/licencia-medicas/licencia-de-acn-md',
              linkText: 'ACN MD License',
            },
            {
              id: `3.1.2`,
              link: '/services/licencia-medicas/licencia-de-acnpa',
              linkText: 'ACNPA License',
            },
            {
              id: `3.1.3`,
              link: '/services/licencia-medicas/licencia-out-of-state-telehealth-provider-registration',
              linkText: 'Out of State Telehealth Provider Registration License',
            },
            {
              id: `3.1.4`,
              link: '/services/licencia-medicas/licencia-medical-doctor-by-mobile-endorsement',
              linkText: 'Medical Doctor by MOBILE Endorsement License',
            },
            {
              id: `3.1.5`,
              link: '/services/licencia-medicas/licencia-por-examinacion',
              linkText: 'License by Examination',
            },
          ],
        },
        {
          id: 3.2,
          link: '/services/reclutamiento',
          linkText: 'Recruitment',
        },
        {
          id: 3.3,
          link: '/services/facturacion',
          linkText: 'Billing',
        },
        // {
        //   id: 3.4,
        //   link: 'https://www.labendoc.com/',
        //   linkText: 'LabEndoc',
        // },
        {
          id: 3.5,
          link: '/services/marketing-and-branding',
          linkText: 'Marketing and branding',
        },
      ],
    },
    {
      id: 4,
      link: '/medical-investments',
      linkText: 'Investments',
    },
    {
      id: 5,
      link: '/blog',
      linkText: 'Blog',
    },
  ];

  public navigation_es: Array<any> = [
    {
      id: 1,
      link: '/',
      linkText: 'Inicio',
    },
    {
      id: 2,
      link: '/about-us',
      linkText: 'Nosotros',
    },
    {
      id: 3,
      link: '/services',
      linkText: 'Servicios',
      child: true,
      submenu: [
        {
          id: 3.1,
          link: '/services/licencia-medicas',
          linkText: 'Licencia medicas',
          child: true,
          submenu: [
            {
              id: `3.1.1`,
              link: '/services/licencia-medicas/licencia-de-acn-md',
              linkText: 'Licencia de ACN MD',
            },
            {
              id: `3.1.2`,
              link: '/services/licencia-medicas/licencia-de-acnpa',
              linkText: 'Licencia de ACNPA',
            },
            {
              id: `3.1.3`,
              link: '/services/licencia-medicas/licencia-out-of-state-telehealth-provider-registration',
              linkText: 'Licencia - Out of State Telehealth Provider Registration',
            },
            {
              id: `3.1.4`,
              link: '/services/licencia-medicas/licencia-medical-doctor-by-mobile-endorsement',
              linkText: 'Licencia - Medical Doctor by MOBILE Endorsement',
            },
            {
              id: `3.1.5`,
              link: '/services/licencia-medicas/licencia-por-examinacion',
              linkText: 'Licencia por Examinación',
            },
          ],
        },
        {
          id: 3.2,
          link: '/services/reclutamiento',
          linkText: 'Reclutamiento',
        },
        {
          id: 3.3,
          link: '/services/facturacion',
          linkText: 'Facturacion',
        },
        // {
        //   id: 3.4,
        //   link: 'https://www.labendoc.com/',
        //   linkText: 'LabEndoc',
        // },
        {
          id: 3.5,
          link: '/services/marketing-and-branding',
          linkText: 'Marketing and branding',
        },
      ],
    },
    {
      id: 4,
      link: '/medical-investments',
      linkText: 'Inversiones',
    },
    {
      id: 5,
      link: '/blog',
      linkText: 'Blog',
    },
  ];

  // public navigation_en: Array<any> = [
  //   {
  //     id: 1,
  //     link: '/',
  //     linkText: 'Home',
  //   },
  //   {
  //     id: 2,
  //     link: '/about-us',
  //     linkText: 'About us',
  //   },
  //   {
  //     id: 3,
  //     link: '/services',
  //     linkText: 'Services',
  //     child: true,
  //     submenu: [
  //       {
  //         id: 3.1,
  //         link: '/services/health-care-providers',
  //         linkText: 'Health Care Providers',
  //       },
  //       {
  //         id: 3.2,
  //         link: '/services/medical-practices',
  //         linkText: 'Medical Practices',
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     link: '/medical-investments',
  //     linkText: 'Investments',
  //   },
  //   {
  //     id: 5,
  //     link: '/blog',
  //     linkText: 'Blog',
  //   },
  // ];

  // public navigation_es: Array<any> = [
  //   {
  //     id: 1,
  //     link: '/',
  //     linkText: 'Inicio',
  //   },
  //   {
  //     id: 2,
  //     link: '/about-us',
  //     linkText: 'Nosotros',
  //   },
  //   {
  //     id: 3,
  //     link: '/services',
  //     linkText: 'Servicios',
  //     child: true,
  //     submenu: [
  //       {
  //         id: 3.1,
  //         link: '/services/health-care-providers',
  //         linkText: 'Proveedores de Servicios',
  //       },
  //       {
  //         id: 3.2,
  //         link: '/services/medical-practices',
  //         linkText: 'Prácticas Médicas',
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     link: '/medical-investments',
  //     linkText: 'Inversiones',
  //   },
  //   {
  //     id: 5,
  //     link: '/blog',
  //     linkText: 'Blog',
  //   },
  // ];

  public navmethod: boolean = false;

  public searchMethod: boolean = false;

  public windowScrolled: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _translate: TranslateService,
    private _helpers: HelpersService
  ) {
    console.log('HeaderPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.navigation =
      this.currentLang === 'en' ? this.navigation_en : this.navigation_es;
  }

  // Sticky Nav
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 200
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  ngOnInit(): void {
    console.log('HeaderPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('HeaderPartialComponent ngOnDestroy');
  }

  public setLang(lang: string): void {
    console.log('HeaderPartialComponent setLang');

    this.loading = true;

    this._translate.use(lang);

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  public toggleLanguage(): void {
    console.log('HeaderPartialComponent toggleLanguage');

    this.currentLang = this._translate.currentLang;

    let language: string = this.currentLang === 'es' ? 'en' : 'es';

    this._translate.use(language);
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('HeaderPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('HeaderPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('HeaderPartialComponent updateData');

    this.navigation =
      this.currentLang === 'en' ? this.navigation_en : this.navigation_es;

    this.loading = false;
  }

  public toggleNav() {
    this.navmethod = !this.navmethod;
    let element = this.document.body;
    element.classList.toggle('locked');
  }

  public toggleSearch() {
    this.searchMethod = !this.searchMethod;
    let element = this.document.body;
    element.classList.toggle('locked');
  }

  public scrollToElement(element_id: string): void {
    this._helpers.scrollToElement(element_id, -50);
  }
}
