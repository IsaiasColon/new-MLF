import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-investments-page',
  templateUrl: './medical-investments-page.component.html',
  styleUrls: ['./medical-investments-page.component.scss'],
})
export class MedicalInvestmentsPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public banner: any = {};

  public banner_en: any = {
    title: 'Medical Investments',
    image: 'assets/mlf/img/banners/medical-investments.jpg',
  };

  public banner_es: any = {
    title: 'Inversiones Médicas',
    image: 'assets/mlf/img/banners/medical-investments.jpg',
  };

  public section2: any = {};

  public section2_en: any = {
    short_title: 'Innovative solutions in healthcare',
    title: 'Get to know our medical innovation projects',
    info: 'We are based on the State of Florida and expanding to the island of Saint Lucia. We focus on responding to the needs of public and private health professionals and organizations around the world, especially in the Caribbean region, where we promote the medical profession and communities in the Lesser Antilles, Greater Antilles, Central America, North South America and the Florida region, among others.',
    image: 'assets/mlf/img/pictures/medical-investments.png',
  };

  public section2_es: any = {
    short_title: 'Soluciones novedosas en salud',
    title: 'Conoce nuestros proyectos de innovación médica',
    info: 'Somos una corporación internacional en expansión que tienes su base de operaciones en los Estados Unidos. Nos enfocamos en responder a las necesidades de los profesionales y organizaciones de la salud públicos y privados en todo el mundo, en especial en la región del Caribe, donde impulsamos al gremio médico y comunidades de las Antillas menores, Antillas mayores, Centroamérica, norte de Suramérica y región de la Florida, entre otros.',
    image: 'assets/mlf/img/pictures/medical-investments.png',
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      slug: 'kuidvital-rural-clinics',
      route: [`/medical-investments/kuidvital-rural-clinics`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/001.png',
      image: null,
      title: 'Kuidvital rural clinics',
      shorttext:
        'Promoting quality health in areas of critical need in the Caribbean',
    },
    {
      id: 2,
      slug: 'hospital-recovery',
      route: [`/medical-investments/hospital-recovery`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/002.png',
      image: null,
      title: 'Recovery of rural hospitals',
      shorttext:
        'Reactivating health centers for primary care in the Caribbean',
    },
    {
      id: 3,
      slug: 'medical-laboratories',
      route: [`/medical-investments/medical-laboratories`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/003.png',
      image: null,
      title: 'High complexity medical laboratories',
      shorttext: 'We offer answers to the needs in advanced medical technology',
    },
    {
      id: 4,
      slug: 'scientific-investigations',
      route: [`/medical-investments/scientific-investigations`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/004.png',
      image: null,
      title: 'Scientific investigations',
      shorttext:
        'We promote the scientific study of the endocannabinoid system (ECS)',
    },
    {
      id: 5,
      slug: 'nuclear-medicine',
      route: [`/medical-investments/nuclear-medicine`],
      col: 'offset-xl-2-custom col-xl-3 offset-lg-0 col-lg-4 offset-md-0 col-md-6',
      icon: 'assets/mlf/img/icons/services/005.png',
      image: null,
      title: 'Mobile nuclear medicine units',
      shorttext:
        'A practical answer for conducting complex studies in rural communities',
    },
    {
      id: 6,
      slug: 'education',
      route: [`/medical-investments/education`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/006.png',
      image: null,
      title: 'Educational Projects',
      shorttext:
        'We are developing a training plan for health professionals in the Caribbean.',
    },
    {
      id: 7,
      slug: 'physician-recruitment',
      route: [`/medical-investments/physician-recruitment`],
      col: 'offset-xl-0 col-xl-3 offset-lg-4 col-lg-4 offset-md-3 col-md-6',
      icon: 'assets/mlf/img/icons/services/007.png',
      image: null,
      title: 'Exchange and recruitment of doctors',
      shorttext:
        'A strategy to strengthen professional medical practice in the Caribbean region',
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      slug: 'kuidvital-rural-clinics',
      route: [`/medical-investments/kuidvital-rural-clinics`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/001.png',
      image: null,
      title: 'Clínicas rurales Kuidvital',
      shorttext:
        'Promovemos salud da calidad en áreas con necesidades críticas en el Caribe',
    },
    {
      id: 2,
      slug: 'hospital-recovery',
      route: [`/medical-investments/hospital-recovery`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/002.png',
      image: null,
      title: 'Recuperación de hospitales rurales',
      shorttext:
        'Reactivamos centros de salud para la atención primaria en el Caribe',
    },
    {
      id: 3,
      slug: 'medical-laboratories',
      route: [`/medical-investments/medical-laboratories`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/003.png',
      image: null,
      title: 'Laboratorios médicos de alta complejidad',
      shorttext:
        'Ofrecemos respuestas a las necesidades en tecnología médica de avanzada',
    },
    {
      id: 4,
      slug: 'scientific-investigations',
      route: [`/medical-investments/scientific-investigations`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/004.png',
      image: null,
      title: 'Investigaciones científicas',
      shorttext:
        'Impulsamos el estudio científico del sistema endocannabinoide (SEC)',
    },
    {
      id: 5,
      slug: 'nuclear-medicine',
      route: [`/medical-investments/nuclear-medicine`],
      col: 'offset-xl-2-custom col-xl-3 offset-lg-0 col-lg-4 offset-md-0 col-md-6',
      icon: 'assets/mlf/img/icons/services/005.png',
      image: null,
      title: 'Unidades móviles de medicina nuclear',
      shorttext: 'Unidades móviles de medicina nuclear',
    },
    {
      id: 6,
      slug: 'education',
      route: [`/medical-investments/education`],
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/006.png',
      image: null,
      title: 'Proyectos educativos',
      shorttext:
        'Desarrollamos un plan de formación de profesionales en salud en el Caribe',
    },
    {
      id: 7,
      slug: 'physician-recruitment',
      route: [`/medical-investments/physician-recruitment`],
      col: 'offset-xl-0 col-xl-3 offset-lg-4 col-lg-4 offset-md-3 col-md-6',
      icon: 'assets/mlf/img/icons/services/007.png',
      image: null,
      title: 'Intercambio y reclutamiento de médicos',
      shorttext:
        'Una estrategia para fortalecer la práctica médica profesional en la región del Caribe',
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('MedicalInvestmentsPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('MedicalInvestmentsPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('MedicalInvestmentsPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('MedicalInvestmentsPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    this.section2 =
      this.currentLang === 'en' ? this.section2_en : this.section2_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log(
          'MedicalInvestmentsPageComponent onLangChange event',
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
          'MedicalInvestmentsPageComponent onLangChange error',
          error
        );
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('MedicalInvestmentsPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
