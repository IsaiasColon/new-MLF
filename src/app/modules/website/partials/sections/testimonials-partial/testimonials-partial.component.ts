import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials-partial',
  templateUrl: './testimonials-partial.component.html',
  styleUrls: ['./testimonials-partial.component.scss'],
})
export class TestimonialsPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Team work`,
    title: `What our satisfied customers say`,
    cta1: `More success stories`,
  };

  public data_es: any = {
    subtitle: `Trabajo en equipo`,
    title: `Lo que dicen nuestros clientes satisfechos`,
    cta1: `Más testimonios`,
  };

  @Input() styles: any = {};

  public author: Array<any> = [
    {
      id: 1,
      title: 'Cumplí mi sueño',
      name: 'Dra. Amanda Pérez',
      post: null,
      image: 'assets/template/images/team/team-one-img-1.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img1.png',
      information: null,
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 2,
      title: 'Buena experiencia',
      name: 'Dr. Antonio González',
      post: null,
      image: 'assets/template/images/team/team-one-img-2.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img2.png',
      information: null,
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 3,
      title: 'Excelente trabajo',
      name: 'Dra. Sharon Acevedo',
      post: null,
      image: 'assets/template/images/team/team-one-img-3.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img3.png',
      information: null,
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
  ];

  public testimonials: Array<any> = [];

  public testimonials_en: Array<any> = [
    {
      id: 1,
      title: 'I fulfilled my dream',
      name: 'Dr. Amanda Pérez',
      comment:
        'Thanks to Medical License Factory I was able to fulfill my dream of becoming a Doctor without restrictions in the United States. Having my regular license was my goal, and I achieved it thanks to Lilia and her team, who with their enthusiasm and knowledge helped me to comply with all the requirements of the Florida Board.',
    },
    {
      id: 2,
      title: 'Good experience',
      name: 'Dr. Antonio González',
      comment:
        'I am very grateful to Medical License Factory for the time and attention they gave me from the ACN to the full License. It was very useful professional advice, which helped me reduce the margins of errors in the interview and feel more confident.',
    },
    {
      id: 3,
      title: 'Excellent work',
      name: 'Dr. Sharon Acevedo',
      comment:
        'I want to express my sincere gratitude to all the people who collaborate in Medical License for helping me to achieve a dream. I am convinced that God sends us angels to guide us along the way and those are Lilia and her team. Keep up the beautiful and excellent work.',
    },
  ];

  public testimonials_es: Array<any> = [
    {
      id: 1,
      title: 'Cumplí mi sueño',
      name: 'Dra. Amanda Pérez',
      comment:
        'Gracias a Medical License Factory logré cumplir mi sueño de ser Médico sin restricciones en Estados Unidos. Tener mi licencia regular era mi meta, y lo logré gracias a Lilia y su equipo, quienes con su entusiasmo y conocimiento me ayudaron a cumplir con todos los requerimientos de la Junta de Florida.',
    },
    {
      id: 2,
      title: 'Buena experiencia',
      name: 'Dr. Antonio González',
      comment:
        'Estoy muy agradecido con Medical License Factory por el tiempo y la atención que me brindó para la Conversión de la Licencia ACN a la Licencia General. Fue una asesoría profesional de mucha utilidad, que me ayudo reducir los márgenes de errores en la entrevista y sentirme más seguro.',
    },
    {
      id: 3,
      title: 'Excelente trabajo',
      name: 'Dra. Sharon Acevedo',
      comment:
        'Quiero manifestarles a todo las personas que colaboran en Medical License un sincero agradecimiento por ayudarme a alcanzar un sueño. Estoy convencida de que Dios nos manda ángeles para que nos guíen en el camino y esos son Lilia y su equipo. Sigan su hermoso y excelente trabajo.',
    },
  ];

  public settings: OwlOptions = {
    loop: true,
    margin: 5,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: false,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };

  constructor(private _translate: TranslateService) {
    console.log('TestimonialsPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('TestimonialsPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('TestimonialsPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('TestimonialsPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.testimonials =
      this.currentLang === 'en' ? this.testimonials_en : this.testimonials_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('TestimonialsPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('TestimonialsPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('TestimonialsPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
