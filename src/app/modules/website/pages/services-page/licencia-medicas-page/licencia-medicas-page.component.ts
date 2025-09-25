import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-licencia-medicas-page',
  templateUrl: './licencia-medicas-page.component.html',
  styleUrls: ['./licencia-medicas-page.component.scss']
})
export class LicenciaMedicasPageComponent implements OnInit {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public banner: any = {};

  public banner_en: any = {
    title: 'choose the license you need',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Escoge la licencia que necesitas',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      title: 'ACN MD License',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas/licencia-de-acn-md'],
      shorttext:
        'It allows U.S.-licensed physicians to practice in Critical Need Areas in Florida, without requiring postgraduate training or the USMLE. It applies only to areas with physician shortages, such as approved clinics and hospitals. Medical License Factory can assist you with the process.',
    },
    {
      id: 2,
      title: 'ACNPA License',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      // backgroud_color: '#004482',
      // color: '#ffffff',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas/licencia-de-acnpa'],
      shorttext:
        'For Physician Assistants (PAs) licensed in the U.S. who want to work in Critical Need Areas in Florida. Requires recent experience and supervision by a physician licensed in the state. License renewable every two years. Medical License Factory makes your application easy.',
    },
    {
      id: 3,
      title: 'Out of State Telehealth Provider Registration License',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas/licencia-out-of-state-telehealth-provider-registration'],
      shorttext:
        'Allows U.S.-licensed healthcare professionals to offer telemedicine in Florida without physical presence. Requires an active license, liability insurance, and state registration. Medical License Factory guides you through the application process.',
    },
    {
      id: 4,
      title: 'Medical Doctor by MOBILE Endorsement License',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ["/services/licencia-medicas/licencia-medical-doctor-by-mobile-endorsement"],
      shorttext:
        'Allows physicians licensed in the U.S. to practice in Florida without geographic restrictions. Requires a passing USMLE or Medical Board certification, and three years of recent experience. Medical License Factory streamlines your process.',
    },
    {
      id: 5,
      title: 'License by Examination',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `READ MORE`,
      route: ['/services/licencia-medicas/licencia-por-examinacion'],
      shorttext:
        'Obtain your license to practice in Florida by meeting the requirements established for physicians who graduated abroad.',
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      title: 'Licencia de ACN MD',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `SABER MÁS`,
      route: ['/services/licencia-medicas/licencia-de-acn-md'],
      shorttext:
        'Permite a médicos con licencia en EE.UU. ejercer en Áreas de Necesidad Crítica en Florida, sin necesidad de postgraduate training ni USMLE. Aplica solo para zonas con escasez de médicos, como clínicas y hospitales aprobados. Medical License Factory te asesora en el proceso.',
    },
    {
      id: 2,
      title: 'Licencia de ACNPA',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      // backgroud_color: '#004482',
      // color: '#ffffff',
      cta1: `SABER MÁS`,
      route: ['/services/licencia-medicas/licencia-de-acnpa'],
      shorttext:
        'Para Physician Assistants (PAs) con licencia en EE.UU. que quieran trabajar en Áreas de Necesidad Crítica en Florida. Requiere experiencia reciente y supervisión de un médico con licencia en el estado. Licencia renovable cada dos años. Medical License Factory facilita tu aplicación.',
    },
    {
      id: 3,
      title: 'Licencia - Out of State Telehealth Provider Registration',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `SABER MÁS`,
      route: ['/services/licencia-medicas/licencia-out-of-state-telehealth-provider-registration'],
      shorttext:
        'Permite a profesionales de la salud con licencia en EE.UU. ofrecer telemedicina en Florida sin presencia física. Requiere licencia activa, seguro de responsabilidad y registro estatal. Medical License Factory te guía en la solicitud.',
    },
    {
      id: 4,
      title: 'Licencia - Medical Doctor by MOBILE Endorsement',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `SABER MÁS`,
      route: ["/services/licencia-medicas/licencia-medical-doctor-by-mobile-endorsement"],
      shorttext:
        'Permite a médicos con licencia en EE.UU. ejercer en Florida sin restricciones geográficas. Requiere USMLE aprobado o certificación de Board Médico, y tres años de experiencia reciente. Medical License Factory agiliza tu proceso.',
    },
    {
      id: 5,
      title: 'Licencia por Examinación',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#dde3fc80',
      color: '#312937',
      cta1: `SABER MÁS`,
      route: ['/services/licencia-medicas/licencia-por-examinacion'],
      shorttext:
        'Obtén tu licencia para ejercer en Florida cumpliendo con los requisitos establecidos para médicos graduados en el extranjero.',
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
