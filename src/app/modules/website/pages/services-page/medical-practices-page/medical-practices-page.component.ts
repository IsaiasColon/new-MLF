import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-practices-page',
  templateUrl: './medical-practices-page.component.html',
  styleUrls: ['./medical-practices-page.component.scss'],
})
export class MedicalPracticesPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `We help you grow`,
    title: `Practice Management Consulting Services & Personalized Practice Management Plans`,
    text: `Our experienced bilingual team facilitates the credentialing and medical licensing process on behalf of the physician. We focus on atypical cases (examination deficiencies and post-graduate training), guiding our clients through each step, evaluating procedures and creating strategies and action plans that further the licensing process, even when the physician must appear before the Medical Board for appeals.`,
  };

  public data_es: any = {
    subtitle: `Te ayudamos a crecer`,
    title: `Consultoría de gestión de prácticas y planes de gestión de prácticas personalizadas`,
    text: `Nuestro experimentado equipo bilingüe facilita el proceso de acreditación y licencia médica en nombre del médico. Nos enfocamos en casos atípicos (deficiencias de examen y formación de posgrado), guiando a nuestros clientes en cada paso, evaluando procedimientos y creando estrategias y planes de acción que favorecen el proceso de licenciamiento, incluso cuando el médico debe comparecer ante la Junta Médica para apelaciones.`,
  };

  public banner: any = {};

  public banner_en: any = {
    title: 'Medical Practices',
    image: 'assets/mlf/img/banners/medical-practices.jpg',
  };

  public banner_es: any = {
    title: 'Prácticas Médicas',
    image: 'assets/mlf/img/banners/medical-practices.jpg',
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      state: 'default',
      overlay: false,
      size: 'item-1 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Financial',
      icon: 'assets/mlf/img/icons/medical-practices/001.png',
      description:
        'Planning capital and operating budgets, including practice furnishings, supplies, professional fees, marketing, and more.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-2 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Human Resources',
      icon: 'assets/mlf/img/icons/medical-practices/002.png',
      description:
        'Staffing and managerial planning, including salary allocations and benefits packages, forms, processes, etc.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-3 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Licensing and Credentialing',
      icon: 'assets/mlf/img/icons/medical-practices/003.png',
      description:
        'Compliance, licensing, and applications to Medicare, Medicaid, and other managed care plans.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-4 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Real Estate and Infrastructure',
      icon: 'assets/mlf/img/icons/medical-practices/004.png',
      description:
        'Negotiate commercial leases, construction, development, etc.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-5 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Branding and marketing',
      icon: 'assets/mlf/img/icons/medical-practices/005.png',
      description:
        'Strategic marketing plans designed to grow your practice and patient base through website design and marketing collateral.',
    },
  ];

  public services_es: Array<any> = [
    {
      state: 'default',
      overlay: false,
      size: 'item-1 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Financiero',
      icon: 'assets/mlf/img/icons/medical-practices/001.png',
      description:
        'Planificación de presupuestos de capital y operativos, incluyendo mobiliario y equipo, suministros capital de trabajo, honorarios profesionales, marketing.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-2 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Recursos Humanos',
      icon: 'assets/mlf/img/icons/medical-practices/002.png',
      description:
        'Planificación de la dotación de personal y la gestión, incluidas las asignaciones de salarios y los paquetes de beneficios. Formas y procesos operativos y de personal.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-3 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Licencias y Credenciales',
      icon: 'assets/mlf/img/icons/medical-practices/003.png',
      description:
        'Aplicaciones para Medicare, Medicaid y otros planes de atención administrada.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-4 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Bienes inmuebles e infraestructura',
      icon: 'assets/mlf/img/icons/medical-practices/004.png',
      description:
        'Negociar arrendamientos de prácticas/comerciales, gestionar el proceso de desarrollo inmobiliario.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'item-5 col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: false,
      title: 'Branding y marketing',
      icon: 'assets/mlf/img/icons/medical-practices/005.png',
      description:
        'Planificación de marketing y divulgación para hacer crecer su práctica y su base de pacientes. Desarrollo y diseño de sitios web.',
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('MedicalPracticesPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('MedicalPracticesPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('MedicalPracticesPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('MedicalPracticesPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('MedicalPracticesPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('MedicalPracticesPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('MedicalPracticesPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
