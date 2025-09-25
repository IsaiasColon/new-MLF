import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public banner: any = {};

  public banner_en: any = {
    title: 'Choose the service you need',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our service areas',
  };

  public banner_es: any = {
    title: 'Escoge el servicio que necesitas',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios',
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      title: 'Licencias Médicas',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas'],
      shorttext:
        'Conoce más detalles sobre la obtención de licencias médicas en Florida, incluyendo opciones para médicos, asistentes médicos y telemedicina.',
    },
    {
      id: 2,
      title: 'Reclutamiento',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      // backgroud_color: '#004482',
      // color: '#ffffff',
      cta1: `READ MORE`,
      route: ['/services/reclutamiento'],
      shorttext:
        'Encuentra y contrata el talento médico ideal para tu institución con nuestro servicio de reclutamiento especializado.',
    },
    {
      id: 3,
      title: 'Facturación',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/facturacion'],
      shorttext:
        'Optimiza los ingresos de tu consulta con un sistema eficiente de facturación médica y gestión de pagos.',
    },
    {
      id: 4,
      title: 'LabEndoc',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ["https://www.labendoc.com/"],
      shorttext:
        'Accede a servicios especializados en diagnóstico y laboratorio diseñados para mejorar la atención médica.',
    },
    {
      id: 5,
      title: 'Marketing y Branding',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/marketing-and-branding'],
      shorttext:
        'Haz que tu práctica médica destaque con estrategias de marketing y branding personalizadas para el sector salud.',
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      title: 'Licencias Médicas',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas'],
      shorttext:
        'Conoce más detalles sobre la obtención de licencias médicas en Florida, incluyendo opciones para médicos, asistentes médicos y telemedicina.',
    },
    {
      id: 2,
      title: 'Reclutamiento',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      // backgroud_color: '#004482',
      // color: '#ffffff',
      cta1: `READ MORE`,
      route: ['/services/reclutamiento'],
      shorttext:
        'Encuentra y contrata el talento médico ideal para tu institución con nuestro servicio de reclutamiento especializado.',
    },
    {
      id: 3,
      title: 'Facturación',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/facturacion'],
      shorttext:
        'Optimiza los ingresos de tu consulta con un sistema eficiente de facturación médica y gestión de pagos.',
    },
    {
      id: 4,
      title: 'LabEndoc',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ["https://www.labendoc.com/", "_blank"],
      shorttext:
        'Accede a servicios especializados en diagnóstico y laboratorio diseñados para mejorar la atención médica.',
    },
    {
      id: 5,
      title: 'Marketing y Branding',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/marketing-and-branding'],
      shorttext:
        'Haz que tu práctica médica destaque con estrategias de marketing y branding personalizadas para el sector salud.',
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('ServicesPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('ServicesPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ServicesPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('ServicesPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ServicesPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('ServicesPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ServicesPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
