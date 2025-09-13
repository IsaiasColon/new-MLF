import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-service-details-partial',
  templateUrl: './service-details-partial.component.html',
  styleUrls: ['./service-details-partial.component.scss'],
})
export class ServiceDetailsPartialComponent implements OnInit, OnDestroy {
  @Input() slug: string | null = null;

  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    title1: `All our projects`,
    title2: `Contact us`,
    email: `Email`,
    message: `Message`,
    cta1: `Submit`,
    cta2: 'I would like to know more',
  };

  public data_es: any = {
    title1: `Todos Nuestros Proyectos`,
    title2: `Contáctanos`,
    email: `Email`,
    message: `Mensaje`,
    cta1: `Enviar`,
    cta2: 'Quiero saber más',
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      slug: 'kuidvital-rural-clinics',
      title: 'Kuidvital rural clinics',
      subtitle: 'Kuidvital rural clinics',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Through the Kuidvital rural clinics project, We seek to guarantee access to quality health services for communities with critical medical care needs in the Caribbean countries, through the creation of an innovative model of clinics that benefits the user with timely access medical care and at low cost; as well as the doctor, who becomes a member of the hospital center and works under an open clinic scheme. Kuidvital has already taken a small step in certain communities, however the central plan of the program will be developed on the island of Saint Lucia.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/kuidvital-rural-clinics.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 2,
      slug: 'hospital-recovery',
      title: 'Recovery of rural hospitals',
      subtitle: 'Recovery of rural hospitals',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            The main purpose of this project is to guarantee primary health care and emergency services in rural areas of the Caribbean area, through the recovery of inactive hospital centers due to problems of financial, technological or personnel sustainability, for which we implement a plan for the comprehensive reactivation of this type of health establishments. The project contemplates, in the same way, the activation of the ambulance service, to offer guarantees of a timely transfer that protects the life of the patient in case of emergencies.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/hospital-recovery.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 3,
      slug: 'medical-laboratories',
      title: 'Medical laboratories',
      subtitle: 'High complexity medical laboratories',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            These types of health infrastructures are equipped with the appropriate medical technology to offer answers to the needs that are required in terms of advanced laboratory examinations and serve to promote the development of research in the medical field, both for clinics and hospitals in the country. where this center is located as well as for nearby countries, which helps to provide better and timely health care to patients.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/medical-laboratories.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 4,
      slug: 'scientific-investigations',
      title: 'Scientific investigations',
      subtitle: 'Scientific investigations',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            The high-level scientific study on the endocannabinoid system (SEC) is one of our priorities, because despite the fact that it is in charge of balancing metabolic processes and optimizing the functions of our body, it is one of the least studied. Our efforts are aimed at expanding their knowledge to regularize their dosage, treatment and legality. We work with leading scientists from around the world, who have already prepared a pre-study and have developed a work protocol with the support of Dr. Syed A. A. Rizvi, from the Hampton University School of Pharmacy (HUSOP, USA).
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/scientific-investigations.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 5,
      slug: 'nuclear-medicine',
      title: 'Nuclear medicine',
      subtitle: 'Mobile nuclear medicine units',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            They are a practical and efficient response to carry out complex studies in hospitals in rural communities with critical health needs and in prisons. With this solution, buses are equipped with high-tech medical equipment, X-rays, ultrasound and other technologies of different medical specialties. In this way, we avoid the transfer of patients, saving time and resources. In the case of prisons, high logistics costs and escape risks are eliminated.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/nuclear-medicine.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 6,
      slug: 'education',
      title: 'Education',
      subtitle: 'Educational Projects',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            With the support of the United States Comprehensive Medical Board, progress is being made in the development on the island of Saint Lucia of a plan for the face-to-face training of health professionals, initially comprehensive medical and nursing personnel. The American medical board will establish the curriculum, the regulations of the educational process and will certify the competencies of the graduated professionals. The project, which has the support of Dr. Inés Alfaro (examiner for the United States Board of Integrative Medicine), includes the reactivation of educational facilities and the recruitment of teachers.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/education.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 7,
      slug: 'physician-recruitment',
      title: 'Exchange and recruitment of doctors',
      subtitle: 'Exchange and recruitment of doctors',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Offering a timely quality health service for all the inhabitants of the Caribbean and Central American community and supporting the strengthening of the medical practice of independent professionals and organizations is one of the main goals of our organization, for which we work to promote plans of exchanges and recruitment of doctors and nurses who offer their services in these regions of the world.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/physician-recruitment.jpg' alt='img' />
        </div>
      </div>`,
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      slug: 'kuidvital-rural-clinics',
      title: 'Clínicas Rurales Kuidvital',
      subtitle: 'Clínicas Rurales Kuidvital',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            A través del proyecto de clínicas rurales Kuidvital, se busca garantizar el acceso a servicios de salud de calidad a las comunidades con necesidades críticas de asistencia médica en los países del Caribe, mediante la creación de un innovador modelo de clínicas que beneficie al usuario con acceso oportuno atención médica y a bajo costo; así como al médico, que se hace socio del centro hospitalario y trabaja bajo un esquema de consultorios abiertos. Kuidvital ya ha dado pequeño paso en ciertas comunidades, sin embargo en plan central del programa se desarrollará en la isla de Santa Lucía.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/kuidvital-rural-clinics.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 2,
      slug: 'hospital-recovery',
      title: 'Recuperación de Hospitales',
      subtitle: 'Recuperación de hospitales',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            El objeto principal de este proyecto es garantizar servicios de atención primaria en salud y urgencias en zonas rurales del área del Caribe, mediante la recuperación de centros hospitalarios inactivos por problemas de sostenibilidad financiera, tecnológica o de personal, para los cual implementamos un plan para la reactivación integral de este tipo de establecimientos de salud. El proyecto contempla, de igual forma, la activación del servicio de aeroambulacias, para ofrecer garantías de un traslado oportuno que resguarde la vida del paciente en caso de urgencias.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/hospital-recovery.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 3,
      slug: 'medical-laboratories',
      title: 'Laboratorios Médicos',
      subtitle: 'Laboratorios médicos de alta complejidad',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Estas tipo de infraestructuras de salud se encuentran equipados con la tecnología médica adecuada para ofrecen respuestas a las necesidades que se requieran en materia de exámenes de laboratorios avanzados y sirven para impulsar el desarrollo de investigaciones en el campo médico, tanto para clínicas y hospitales del país donde se encuentra este centro como para los países cercanos, lo que ayuda a brindar una mejor y oportuna atención en salud a los pacientes.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/medical-laboratories.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 4,
      slug: 'scientific-investigations',
      title: 'Investigaciones Científicas',
      subtitle: 'Investigaciones científicas',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            El estudio científico de alto nivel sobre el sistema endocannabinoide (SEC) es una de nuestras prioridades, pues a pesar de que se encarga de equilibrar procesos metabólicos y optimizar las funciones de nuestro cuerpo es uno de los sistemas del cuerpo humano menos estudiados. Nuestros esfuerzos van dirigidos a ampliar su conocimiento para regularizar su dosificación, tratamiento y legalidad. Trabajamos con destacados científicos del mundo, quienes ya han elaborado un pre-estudio y han desarrollado un protocolo de trabajo con el apoyo del Dr. Syed A. A. Rizvi, del Hampton University School of Pharmacy (HUSOP, USA).
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/scientific-investigations.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 5,
      slug: 'nuclear-medicine',
      title: 'Medicina Nuclear',
      subtitle: 'Unidades móviles de medicina nuclear',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Son una respuesta práctica y eficiente para realizar estudios complejos en hospitales de comunidades rurales con necesidades críticas en salud y en centros penitenciarios. Con esta solución se dotan buses con equipos médicos de alta tecnología, rayos X, ultrasonido y otras tecnologías de diferentes especialidades médicas. De esta forma, evitamos el traslado de los pacientes, ahorrando tiempo y recursos. En el caso de las prisiones, se eliminan los altos costos de logística y los riegos de escapes.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/nuclear-medicine.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 6,
      slug: 'education',
      title: 'Educación',
      subtitle: 'Proyectos educativos',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Con el apoyo de la Junta Médica Integral de los Estados Unidos, se avanza en el desarrollo en la isla de Santa Lucía de un plan para la formación presencial de profesionales en salud, inicialmente personal médico integral y de enfermería. La junta médica estadounidense establecerá el curriculum, las normativas del proceso educativo y certificará las competencias de los profesionales egresados. El proyecto, que cuenta con el respaldo de la doctora Inés Alfaro (examinadora de la Junta de Medicina Integral de los Estados Unidos), incluye la reactivación de instalaciones educativas y el reclutamiento de docentes.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/education.jpg' alt='img' />
        </div>
      </div>`,
    },
    {
      id: 7,
      slug: 'physician-recruitment',
      title: 'Reclutamiento de médicos en el Caribe',
      subtitle: 'Intercambio y reclutamiento de médicos',
      htmltext: `<div class='services-details__text-box1'>
          <p>
            Ofrecer un servicio de salud oportuno de calidad para todos los habitantes de la comunidad del Caribe y Centroamérica y apoyar el fortalecimiento de la practica médica de profesionales independientes y organizaciones es una de las metas principales de nuestra organización, por lo que trabajamos para promover panes de intercambios y reclutamiento de médicos y enfermeros que ofrezcan su servicios en estas regiones del mundo.
          </p>
        </div>
        <div class='services-details-img1'>
          <img src='assets/mlf/img/banners/services/physician-recruitment.jpg' alt='img' />
        </div>
      </div>`,
    },
  ];

  public servicedetails: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private _translate: TranslateService
  ) {
    console.log('ServiceDetailsPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('ServiceDetailsPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ServiceDetailsPartialComponent ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ServiceDetailsPartialComponent ngOnChanges', changes);
    this.slug = changes['slug'].currentValue;
    this.setService(this.slug);
  }

  public setService(slug: any) {
    this.servicedetails = this.services.filter((item: { slug: any }) => {
      return item.slug == slug;
    });
  }

  public setData(): void {
    console.log('ServiceDetailsPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;

    this.setService(this.slug);
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ServiceDetailsPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('ServiceDetailsPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ServiceDetailsPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
