import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-menu-partial',
  templateUrl: './mobile-menu-partial.component.html',
  styleUrls: ['./mobile-menu-partial.component.scss'],
})
export class MobileMenuPartialComponent implements OnInit, OnDestroy {
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
          link: '/services/health-care-providers',
          linkText: 'Health Care Providers',
        },
        {
          id: 3.2,
          link: '/services/medical-practices',
          linkText: 'Medical Practices',
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
    {
      id: 6,
      link: '/contact-us',
      linkText: 'Contact us',
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
          link: '/services/health-care-providers',
          linkText: 'Proveedores de Servicios',
        },
        {
          id: 3.2,
          link: '/services/medical-practices',
          linkText: 'Prácticas Médicas',
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
    {
      id: 6,
      link: '/contact-us',
      linkText: 'Contáctanos',
    },
  ];

  public open: boolean = false;

  constructor(private _translate: TranslateService) {
    console.log('MobileMenuPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    console.log(
      'MobileMenuPartialComponent constructor currentLang',
      this.currentLang
    );

    this.navigation =
      this.currentLang === 'en' ? this.navigation_en : this.navigation_es;
  }

  ngOnInit(): void {
    console.log('MobileMenuPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('MobileMenuPartialComponent ngOnDestroy');
  }

  public trigger(item: { open: boolean }) {
    item.open = !item.open;
  }

  public setLang(lang: string): void {
    console.log('MobileMenuPartialComponent setLang');

    this.loading = true;

    this._translate.use(lang);

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  public toggleLanguage(): void {
    console.log('MobileMenuPartialComponent toggleLanguage');

    this.currentLang = this._translate.currentLang;

    let language: string = this.currentLang === 'es' ? 'en' : 'es';

    this._translate.use(language);
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('MobileMenuPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('MobileMenuPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('MobileMenuPartialComponent updateData');

    this.navigation =
      this.currentLang === 'en' ? this.navigation_en : this.navigation_es;

    this.loading = false;
  }
}
