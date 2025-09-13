import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
})
export class AboutUsPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public cards_data: any = {};

  public cards_data_en: any = {
    subtitle: `Leaders in licensing`,
    title: `Achieve better performance in your medical practice`,
  };

  public cards_data_es: any = {
    subtitle: `Líderes en licenciamiento`,
    title: `Logra un mejor desempeño en tu práctica médica`,
  };

  public banner: any = {};

  public banner_en: any = {
    title: 'Medical License Factory',
    image: 'assets/mlf/img/banners/about-us.png',
  };

  public banner_es: any = {
    title: 'Medical License Factory',
    image: 'assets/mlf/img/banners/about-us.png',
  };

  public cards: Array<any> = [];

  public cards_en: Array<any> = [
    {
      id: 1,
      slug: null,
      col: 'offset-xl-2 col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/008.png',
      image: null,
      title: 'COMMITMENT',
      shorttext:
        'We are committed to ensuring your professional development, so that you can achieve your dream of a career in your area of practice.',
    },
    {
      id: 2,
      slug: null,
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/009.png',
      image: null,
      title: 'TRANSPARENCY',
      shorttext:
        'Our clients feel secure in participating in a simple process, with understandable and transparent information at every step.',
    },
    {
      id: 3,
      slug: null,
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/010.png',
      image: null,
      title: 'EFFICIENCY',
      shorttext:
        'We have simplified the tedious procedures required for compliance, ensuring fast and reliable results for our clients',
    },
  ];

  public cards_es: Array<any> = [
    {
      id: 1,
      slug: null,
      col: 'offset-xl-2 col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/008.png',
      image: null,
      title: 'COMPROMISO',
      shorttext:
        'Estamos comprometidos en asegurar tu desarrollo profesional, para que alcances el sueño posible de un mejor desempeño en su área de práctica.',
    },
    {
      id: 2,
      slug: null,
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/009.png',
      image: null,
      title: 'TRANSPARENCIA',
      shorttext:
        'Nuestros clientes se sienten seguros al participar en un proceso sencillo, con información comprensible y transparente en cada paso.',
    },
    {
      id: 3,
      slug: null,
      col: 'col-xl-3 col-lg-4 col-md-6',
      icon: 'assets/mlf/img/icons/services/010.png',
      image: null,
      title: 'EFICIENCIA',
      shorttext:
        'Hemos simplificado los tediosos procedimientos que requiere el cumplimiento, asegurando resultados rápidos y confiables para nuestros clientes.',
    },
  ];

  public image_with_text_data_en: any = {
    subtitle: `Focus on patient care`,
    title: `Don't worry about the paperwork`,
    texts: [
      `With over a decade of experience in medical licensing, billing, human resources, compliance and more, we provide integrated solutions to meet your professional needs while helping you increase your practice revenue.`,
      `Our solutions allow you to reduce administrative burdens in medical practices so you can focus on patient care.`,
      `Our suite of reimbursable digital medicine services are designed to improve clinical outcomes and deliver world-class patient care, so you'll avoid outsourcing to multiple providers and have peace of mind knowing your practice is compliant, efficient, cost-effective and organized.`,
      `We support you in establishing:`,
    ],
    items: [
      `Medical licenses`,
      `Renewals`,
      `Credential Verifications`,
      `Practice operations and marketing`,
      `Diagnostic laboratories`,
      `Compliance documentation`,
      `Insurance`,
      `Government payment <br /> programs (Medicaid <br /> and Medicare),`,
      `Narcotics licensing <br /> and DEA compliance`,
    ],
    ctas: [
      {
        col: `col-lg-6 col-md-12`,
        action: `#bot`,
        text: `More info`,
        color: 'blue',
      },
    ],
    bg_image_small: `assets/mlf/img/pictures/cta4.png`,
    bg_image_2: null,
  };

  public image_with_text_data_es: any = {
    subtitle: `Enfócate en la atención a los pacientes`,
    title: `Despreocúpate por los trámites`,
    texts: [
      `Con más de una década de experiencia en licencias médicas, facturación, recursos humanos, cumplimiento y más, te brindamos soluciones integradas para satisfacer tus necesidades profesionales al tiempo que te ayudamos a aumentar los ingresos de tu práctica.`,
      `Nuestras soluciones te permiten reducir las cargas administrativas en las prácticas médicas para que te concentres en la atención a tus los pacientes.`,
      `Nuestro conjunto de servicios de medicina digital reembolsables están diseñadas para mejorar los resultados clínicos y brindar atención de primera clase al paciente, con lo que evitarás subcontratar con diferentes proveedores y tendrás la tranquilidad de saber que tu consultorio cumple con las normas y es eficiente, rentable y organizado.`,
      `Te apoyamos en el establecimiento de:`,
    ],
    items: [
      `Licencias médicas`,
      `Renovaciones`,
      `Verificaciones de credenciales`,
      `Operaciones de práctica y mercadeo`,
      `Laboratorios de diagnóstico`,
      `Documentación de cumplimiento`,
      `Seguros`,
      `Programas gubernamentales <br /> de pago (Medicaid <br /> y Medicare)`,
      `Licencias de narcóticos <br /> y cumplimiento de la DEA`,
    ],
    ctas: [
      {
        col: `col-lg-6 col-md-12`,
        action: `#bot`,
        text: `Más información`,
        color: 'blue',
      },
    ],
    bg_image_small: `assets/mlf/img/pictures/cta4.png`,
    bg_image_2: null,
  };

  public image_with_text_data2_en: any = {
    subtitle: `Quick and reliable results`,
    title: `Manage your license and integrate into the labor market.`,
    texts: [
      `Many of our clients successfully obtain their medical licenses by working with us. We have been helping healthcare experts integrate into the job market because our multidisciplinary team is committed to seeing you successfully practice in the United States. Our team works with you every step of the way, from helping you through the process of obtaining the proper licensure to setting up and managing a practice.`,
      `We succeed because our workflow is methodical, compliant, and transparent. As a result, our clients understand how we work, what laws and regulations apply to your case, and where your case is in the process. We know how medical boards work to the point that we understand what they evaluate.`,
    ],
    items: [],
    ctas: [
      {
        col: `col-lg-6 col-md-12`,
        action: `#bot`,
        text: `Read more`,
        color: 'yellow',
      },
    ],
    bg_image_1: `assets/mlf/img/pictures/cta5.png`,
    bg_image_2: `assets/mlf/img/pictures/cta6.png`,
  };

  public image_with_text_data2_es: any = {
    subtitle: `Resultados rápidos y confiables`,
    title: `Gestiona tu licencia e intégrate al mercado laboral`,
    texts: [
      `Un alto porcentaje de nuestros clientes obtienen con éxito sus licencias médicas al trabajar con nosotros. Hemos estado ayudando a los expertos en salud a integrarse al mercado laboral porque nuestro equipo multidisciplinario está comprometido a verlo practicar con éxito en los Estados Unidos. Nuestro equipo trabaja junto a usted en cada paso, desde ayudarlo en el proceso de obtener la licencia adecuada hasta establecer y administrar una práctica.`,
      `Tenemos éxito porque nuestro flujo de trabajo es metódico, compatible y transparente. Como resultado, nuestros clientes entienden cómo trabajamos, qué leyes y reglamentos se aplican a su caso y en qué etapa del proceso se encuentra su caso. Sabemos cómo funcionan las juntas médicas al punto que entendemos qué evalúan.`,
    ],
    items: [],
    ctas: [
      {
        col: `col-lg-6 col-md-12`,
        action: `#bot`,
        text: `Saber más`,
        color: 'yellow',
      },
    ],
    bg_image_1: `assets/mlf/img/pictures/cta5.png`,
    bg_image_2: `assets/mlf/img/pictures/cta6.png`,
  };

  // public team_data_en: any = {
  //   subtitle: `Our team`,
  //   title: `Meet our professionals`,
  //   teams: [
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Lilia Waldero`,
  //           post: `Founder and CEO`,
  //           image: `assets/mlf/img/team/lilia_waldero.jpg`,
  //           linkedin: `https://www.linkedin.com/in/arpesystem`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Dra. Inés Alfaro`,
  //           post: `Medical Consultant`,
  //           image: `assets/mlf/img/team/ines_alfaro.jpg`,
  //           linkedin: `https://www.linkedin.com/in/ines-m-alfaro-mendoza-318b072`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Syed A. A. Rizvi, PhD, MBA, MS`,
  //           post: `Scientific and medical advisor`,
  //           image: `assets/mlf/img/team/siyed_rizvi.jpg`,
  //           linkedin: `https://www.linkedin.com/in/drsyedarizvi/`,
  //         },
  //       ],
  //     },
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Clarisbel Bradley`,
  //           post: `Project Manager`,
  //           image: `assets/mlf/img/team/clarisbel_bradley.jpg`,
  //           linkedin: `https://www.linkedin.com/in/clarisbel-bradley-80690858/`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Anabella Pacheco`,
  //           post: `Processing Specialist`,
  //           image: `assets/mlf/img/team/anabella_pacheco.jpg`,
  //           linkedin: null,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Assad Farroq`,
  //           post: `Processing Specialist`,
  //           image: `assets/mlf/img/team/assad_farroq.jpg`,
  //           linkedin: null,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Giles Howe`,
  //           post: `Executive Assistant`,
  //           image: `assets/mlf/img/team/giles_howe.jpg`,
  //           linkedin: `https://www.linkedin.com/in/giles-howe-21a7ba22`,
  //         },
  //       ],
  //     },
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Carlos Torres`,
  //           post: `Software Developer`,
  //           image: `assets/mlf/img/team/carlos_torres.jpg`,
  //           linkedin: `https://www.linkedin.com/in/carlos-jesús-torres-41054391/`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Deniel Díaz`,
  //           post: `Software Developer`,
  //           image: `assets/mlf/img/team/deniel_diaz.jpg`,
  //           linkedin: `https://www.linkedin.com/in/deniel-diaz-75a69a1a3?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC-fGLYB3vXXUkEEdfhKPb3dCvisLpr3xAE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BcO9bEjuuT2Co%2F9KirAMQAg%3D%3D`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Julio C. Marín`,
  //           post: `Graphic Designer`,
  //           image: `assets/mlf/img/team/julio_marin.jpg`,
  //           linkedin: `https://www.linkedin.com/in/juliocmb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC1bxGUBQ0YmzmpYdp4XRcKHzxT8ja1Y9Ac&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BMkuKvYzXQ%2BSPTKENs5zTag%3D%3D`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Eduardo Zacarías`,
  //           post: `Communications and Social Media`,
  //           image: `assets/mlf/img/team/eduardo_zacarias.jpg`,
  //           linkedin: `https://www.linkedin.com/in/eduardo-zacarias-qa-tester/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqglyRktCTtymYIi%2FQTPGxw%3D%3D`,
  //         },
  //       ],
  //     },
  //   ],
  // };

  public team_data_en: any = {
    subtitle: `Our team`,
    title: `Meet our professionals`,
    teams: [
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Lilia Waldero`,
            post: `President`,
            image: `assets/mlf/img/team/lilia_waldero.jpg`,
            linkedin: `https://www.linkedin.com/in/arpesystem`,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Reina Williams`,
            post: `Vice president`,
            image: `assets/mlf/img/team/reina_williams.png`,
            linkedin: ``
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Dra. Alejandra Pérez`,
            post: `Clinical Consulting`,
            image: `assets/mlf/img/team/alejandra_perez.png`,
            linkedin: ``,
          },
        ],
      },
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Kelvin Blanco`,
            post: `Project Manager`,
            image: `assets/mlf/img/team/kelvin_blanco.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Yonahir Montilla`,
            post: `Processor/Analyst`,
            image: `assets/mlf/img/team/yonahir_montilla.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Diana Bradley`,
            post: `Processor/Analyst`,
            image: `assets/mlf/img/team/diana_bradley.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `María D. Solé`,
            post: `Editor and Writer`,
            image: `assets/mlf/img/team/maria_d_sole.png`,
            linkedin: null,
          },
        ],
      },
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Julio C. Marín`,
            post: `Graphic Designer`,
            image: `assets/mlf/img/team/julio_c_marin.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Dawit Gebrehiwot`,
            post: `Software Developer`,
            image: `assets/mlf/img/team/dawit_gebrehiwot.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Isaias Colon`,
            post: `Software Developer`,
            image: `assets/mlf/img/team/isaias_colon.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Hana Gebrehiwot`,
            post: `Social Media Manager`,
            image: `assets/mlf/img/team/hana_gebrehiwot.png`,
            linkedin: null,
          },
        ],
      },
    ],
  };

  public team_data_es: any = {
    subtitle: `Nuestro equipo`,
    title: `Conoce a nuestros profesionales`,
    teams: [
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Lilia Waldero`,
            post: `President`,
            image: `assets/mlf/img/team/lilia_waldero.jpg`,
            linkedin: `https://www.linkedin.com/in/arpesystem`,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Reina Williams`,
            post: `Vice president`,
            image: `assets/mlf/img/team/reina_williams.png`,
            linkedin: ``
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Dra. Alejandra Pérez`,
            post: `Clinical Consulting`,
            image: `assets/mlf/img/team/alejandra_perez.png`,
            linkedin: ``,
          },
        ],
      },
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Kelvin Blanco`,
            post: `Project Manager`,
            image: `assets/mlf/img/team/kelvin_blanco.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Yonahir Montilla`,
            post: `Processor/Analyst`,
            image: `assets/mlf/img/team/yonahir_montilla.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Diana Bradley`,
            post: `Processor/Analyst`,
            image: `assets/mlf/img/team/diana_bradley.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `María D. Solé`,
            post: `Editor and Writer`,
            image: `assets/mlf/img/team/maria_d_sole.png`,
            linkedin: null,
          },
        ],
      },
      {
        team: [
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Julio C. Marín`,
            post: `Graphic Designer`,
            image: `assets/mlf/img/team/julio_c_marin.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Dawit Gebrehiwot`,
            post: `Software Developer`,
            image: `assets/mlf/img/team/dawit_gebrehiwot.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Isaias Colon`,
            post: `Software Developer`,
            image: `assets/mlf/img/team/isaias_colon.png`,
            linkedin: null,
          },
          {
            col: `col-xl-3 col-lg-3 col-md-6`,
            name: `Hana Gebrehiwot`,
            post: `Social Media Manager`,
            image: `assets/mlf/img/team/hana_gebrehiwot.png`,
            linkedin: null,
          },
        ],
      },
    ],
  };

  // public team_data_es: any = {
  //   subtitle: `Nuestro equipo`,
  //   title: `Conoce a nuestros profesionales`,
  //   teams: [
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Lilia Waldero`,
  //           post: `President`,
  //           image: `assets/mlf/img/team/lilia_waldero.jpg`,
  //           linkedin: `https://www.linkedin.com/in/arpesystem`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Dra. Inés Alfaro`,
  //           post: `Consultor Médico`,
  //           image: `assets/mlf/img/team/ines_alfaro.jpg`,
  //           linkedin: `https://www.linkedin.com/in/ines-m-alfaro-mendoza-318b072`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Syed A. A. Rizvi, PhD, MBA, MS`,
  //           post: `Asesor científico y médico`,
  //           image: `assets/mlf/img/team/siyed_rizvi.jpg`,
  //           linkedin: `https://www.linkedin.com/in/drsyedarizvi/`,
  //         },
  //       ],
  //     },
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Clarisbel Bradley`,
  //           post: `Gerente de Proyecto`,
  //           image: `assets/mlf/img/team/clarisbel_bradley.jpg`,
  //           linkedin: `https://www.linkedin.com/in/clarisbel-bradley-80690858/`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Anabella Pacheco`,
  //           post: `Especialista en Procesamiento`,
  //           image: `assets/mlf/img/team/anabella_pacheco.jpg`,
  //           linkedin: null,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Assad Farroq`,
  //           post: `Especialista en Procesamiento`,
  //           image: `assets/mlf/img/team/assad_farroq.jpg`,
  //           linkedin: null,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Giles Howe`,
  //           post: `Asistente Ejecutivo`,
  //           image: `assets/mlf/img/team/giles_howe.jpg`,
  //           linkedin: `https://www.linkedin.com/in/giles-howe-21a7ba22`,
  //         },
  //       ],
  //     },
  //     {
  //       team: [
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Carlos Torres`,
  //           post: `Desarrollador de Software`,
  //           image: `assets/mlf/img/team/carlos_torres.jpg`,
  //           linkedin: `https://www.linkedin.com/in/carlos-jesús-torres-41054391/`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Deniel Díaz`,
  //           post: `Desarrollador de Software`,
  //           image: `assets/mlf/img/team/deniel_diaz.jpg`,
  //           linkedin: `https://www.linkedin.com/in/deniel-diaz-75a69a1a3?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC-fGLYB3vXXUkEEdfhKPb3dCvisLpr3xAE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BcO9bEjuuT2Co%2F9KirAMQAg%3D%3D`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Julio C. Marín`,
  //           post: `Diseñador Gráfico`,
  //           image: `assets/mlf/img/team/julio_marin.jpg`,
  //           linkedin: `https://www.linkedin.com/in/juliocmb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC1bxGUBQ0YmzmpYdp4XRcKHzxT8ja1Y9Ac&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BMkuKvYzXQ%2BSPTKENs5zTag%3D%3D`,
  //         },
  //         {
  //           col: `col-xl-3 col-lg-3 col-md-6`,
  //           name: `Eduardo Zacarías`,
  //           post: `Comunicaciones y Redes Sociales`,
  //           image: `assets/mlf/img/team/eduardo_zacarias.jpg`,
  //           linkedin: `https://www.linkedin.com/in/eduardo-zacarias-qa-tester/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqglyRktCTtymYIi%2FQTPGxw%3D%3D`,
  //         },
  //       ],
  //     },
  //   ],
  // };

  constructor(private _translate: TranslateService) {
    console.log('AboutUsPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('AboutUsPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('AboutUsPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('AboutUsPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    this.cards_data =
      this.currentLang === 'en' ? this.cards_data_en : this.cards_data_es;

    this.cards = this.currentLang === 'en' ? this.cards_en : this.cards_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('AboutUsPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('AboutUsPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('AboutUsPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
