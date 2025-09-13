import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-health-care-providers-page',
  templateUrl: './health-care-providers-page.component.html',
  styleUrls: ['./health-care-providers-page.component.scss'],
})
export class HealthCareProvidersPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `We guide you through each step`,
    title: `Achieve success in your accreditation and medical licensing process`,
    text: `Our experienced bilingual team facilitates the credentialing and
    medical licensing process on behalf of the physician. We focus on
    atypical cases (examination deficiencies and post-graduate training),
    guiding our clients through each step, evaluating procedures and
    creating strategies and action plans that further the licensing
    process, even when the physician must appear before the Medical Board
    for appeals.`,
  };

  public data_es: any = {
    subtitle: `Te guiamos en cada paso`,
    title: `Logra el éxito en tu proceso de acreditación y licencia médica`,
    text: `Nuestro experimentado equipo bilingüe facilita el proceso de acreditación y licencia médica en nombre del médico. Nos enfocamos en casos atípicos (deficiencias de examen y formación de posgrado), guiando a nuestros clientes en cada paso, evaluando procedimientos y creando estrategias y planes de acción que favorecen el proceso de licenciamiento, incluso cuando el médico debe comparecer ante la Junta Médica para apelaciones.`,
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LEX',
      icon: false,
      title: 'License by Examination',
      description:
        'Applies when you have passed the USMLEs/FLEX or SPEX exams, and you are required to have a minimum of a year of ACGME-certified postgraduate training.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LEN',
      icon: false,
      title: 'License by Endorsement',
      description:
        'Applies when you have a primary full and unrestricted MD license from one state, and you are required to have a minimum of a year of CME-certified postgraduate training. The requirements may vary, and you must meet the regulations of that individual state.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LRE',
      icon: false,
      title: 'License by Reciprocity',
      description:
        'Some states allow you to practice with the license of another.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'ACN',
      icon: false,
      title: 'ACN License',
      description:
        'The requirement applies when you have a primary full and unrestricted MD license, and it is not required to have passed any exams or have an ACGME certified postgraduate training. This license only applies to the state of Florida in ACN facilities.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'INL',
      icon: false,
      title: 'Institutional License',
      description: 'Permit that obliges the doctor to work in an institution. ',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'PAL',
      icon: false,
      title: 'Physician Assistant License',
      description:
        'Applies to a health care professional who provides medical care under the supervision of a physician.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'NUL',
      icon: false,
      title: 'Nursing License',
      description:
        'Depending on the case may apply by examination or endorsement. Requirements change.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'CME',
      icon: false,
      title: 'Continual Medical Education and Examination Preparation ',
      description:
        'We prepare doctors to stay current in their various specialties through courses.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'HSE',
      icon: false,
      title: 'HSE License',
      description:
        'Applies to practice medicine employed by a Florida-licensed hospital under the direct supervision of an MD or DO, as well as those who are part of an approved training program designed to increase their knowledge of the clinical disciplines of medicine.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'DEA',
      icon: false,
      title: 'DEA Registration',
      description:
        'Allows prescribing, dispensing and administering medications defined as Controlled Dangerous Substances to licensed health care professionals.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'DOT',
      icon: false,
      title: 'DOT Registration and Licensure',
      description:
        'The Federal Motor Carrier Safety Regulations require all Commercial Driver License holders to certify with the State Driver Licensing Agency. This includes physical examinations and a medical examination by a physician who is licensed by the FMCSA.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'CSD',
      icon: false,
      title: 'Civil Surgeon Designation',
      description:
        'Civil surgeons are doctors who perform medical exams on immigrants to the United States - in particular, those seeking permanent residency or certain types of visas. They are licensed doctors who have at least four years of experience working in their chosen specialty.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3 offset-lg-3 offset-xl-3 offset-xxl-3',
      short_title: 'TLL',
      icon: false,
      title: 'Telemedicine License',
      description:
        'Applies to those health care professionals who wish to practice telemedicine to patients in a state licensed in any other U.S. jurisdiction.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'TPL',
      icon: false,
      title: 'Temporary License',
      description:
        'Due to COVID-19, there is a temporary license that will be valid for the duration of the state of emergency.',
    },
  ];

  public services_es: Array<any> = [
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LEX',
      icon: false,
      title: 'Licencia por Examen',
      description:
        'Se aplica cuando se han superado los exámenes USMLEs/FLEX o SPEX, y se requiere un mínimo de un año de formación de postgrado certificada por el ACGME.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LEN',
      icon: false,
      title: 'Licencia por Endoso',
      description:
        'Se aplica cuando se tiene una licencia primaria de médico completa y sin restricciones de un estado, y se requiere tener un mínimo de un año de formación de postgrado con certificación CME. Los requisitos pueden variar y debes cumplir la normativa de cada estado.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'LRE',
      icon: false,
      title: 'Licencia por Reciprocidad',
      description:
        'Algunos estados le permiten ejercer con la licencia de otro.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'ACN',
      icon: false,
      title: 'Licencia ACN',
      description:
        'El requisito se aplica cuando se tiene una licencia primaria de médico completa y sin restricciones, y no se requiere haber aprobado ningún examen ni tener una formación de postgrado certificada por el ACGME. Esta licencia solo se aplica en el estado de Florida en instalaciones de ACN.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'INL',
      icon: false,
      title: 'Licencia Institucional',
      description:
        'Permiso que obliga al médico a trabajar en una institución.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'PAL',
      icon: false,
      title: 'Licencia de Asistente Médico',
      description:
        'Aplica para un profesional de la salud que brinda atención médica bajo la supervisión de un doctor. ',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'NUL',
      icon: false,
      title: 'Licencia de Enfermería',
      description:
        'Dependiendo del caso se puede aplicar por medio de examinación o endorso. Los requisitos cambian.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'CME',
      icon: false,
      title: 'Formación Médica Continua y Preparación de Exámenes',
      description:
        'Preparamos a doctores a mantenerse al día en sus distintas especialidades por medio de cursos.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'HSE',
      icon: false,
      title: 'Licencia HSE',
      description:
        'Aplica para ejercer medicina empleados por un hospital con licencia de Florida bajo la supervisión directa de un MD o DO, así como también para aquellos que son parte de un programa aprobado de formación, diseñado para aumentar su conocimiento de las disciplinas clínicas de la medicina.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'DEA',
      icon: false,
      title: 'Registro DEA',
      description:
        'Permite prescribir, dispensar y administrar medicamentos definidos como Sustancias Peligrosas Controladas a profesionales de la salud licenciados.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'DOT',
      icon: false,
      title: 'Registro y Licencia DOT',
      description:
        'Las Regulaciones Federales de Seguridad del Autotransporte requieren que todos los titulares de la Licencia de Conducir Comercial se certifiquen con la Agencia Estatal de Licencias de Conducir. Esto incluye exámenes físicos y un examen médico por un médico que es licenciado por la FMCSA.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'CSD',
      icon: false,
      title: 'Designación de Cirujano Civil',
      description:
        'Los cirujanos civiles son médicos que realizan exámenes médicos a los inmigrantes en los Estados Unidos - en particular, los que buscan la residencia permanente o ciertos tipos de visas. Son médicos licenciados que tienen al menos cuatro años de experiencia trabajando en su especialidad elegida.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3 offset-lg-3 offset-xl-3 offset-xxl-3',
      short_title: 'TLL',
      icon: false,
      title: 'Licencia de Telemedicina',
      description:
        'Aplica para aquellos profesionales de la salud que desean practicar telemedicina a pacientes de un estado con licencia de cualquier otra jurisdicción Americana.',
    },
    {
      state: 'default',
      overlay: false,
      size: 'col-md-6 col-lg-3 col-xl-3 col-xxl-3',
      short_title: 'TPL',
      icon: false,
      title: 'Licencia Temporal',
      description:
        'Due to COVID-19, there is a temporary license that will be valid for the duration of the state of emergency.',
    },
  ];

  public banner: any = {};

  public banner_en: any = {
    title: 'Health Care Providers',
    image: 'assets/mlf/img/banners/health-care-providers.jpg',
  };

  public banner_es: any = {
    title: 'Proveedores de Salud',
    image: 'assets/mlf/img/banners/health-care-providers.jpg',
  };

  constructor(private _translate: TranslateService) {
    console.log('HealthCareProvidersPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('HealthCareProvidersPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('HealthCareProvidersPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('HealthCareProvidersPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log(
          'HealthCareProvidersPageComponent onLangChange event',
          event
        );

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log(
          'HealthCareProvidersPageComponent onLangChange error',
          error
        );
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('HealthCareProvidersPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
