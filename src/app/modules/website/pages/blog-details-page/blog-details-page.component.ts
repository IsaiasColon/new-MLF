import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { BlogService, BlogArticle } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss'],
})
export class BlogDetailsPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  public loading: boolean = false;
  public currentLang: string | null = null;
  public article: BlogArticle | null = null;
  public relatedArticles: BlogArticle[] = [];
  public articleSlug: string = '';

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {
    title: '9 realidades detrás de tu sueño americano como médico',
    heroImage: 'assets/mlf/img/banners/medical-practices.jpg',
    heroImageAlt: 'Médicas profesionales en consulta',
    introduction: [
      'Cada año, miles de médicos graduados en el extranjero toman la decisión de emigrar a Estados Unidos en busca de mejores oportunidades profesionales y personales. La percepción de Estados Unidos como una "tierra prometida" para los profesionales de la salud está profundamente arraigada en la mente de muchos médicos internacionales.',
      'Los salarios atractivos, la tecnología médica de vanguardia, las oportunidades de especialización y el prestigio asociado con la práctica médica en Estados Unidos son factores que ejercen una poderosa atracción. Sin embargo, esta visión idealizada a menudo pasa por alto aspectos fundamentales que determinan el éxito o el fracaso del proyecto migratorio.',
      'En este artículo, exploraremos nueve realidades cruciales que todo médico extranjero debe considerar antes de embarcarse en su sueño americano. Estas realidades no pretenden desalentar, sino proporcionar una perspectiva honesta y completa que permita una toma de decisiones informada y una preparación adecuada.'
    ],
    realities: [
      {
        number: 1,
        title: 'La importancia de una planificación integral',
        description: 'El proceso de emigración médica a Estados Unidos requiere una planificación meticulosa que abarca múltiples aspectos. No se trata simplemente de aprobar los exámenes USMLE, sino de desarrollar una estrategia integral que incluya:',
        points: [
          'Análisis financiero detallado',
          'Preparación exhaustiva para los exámenes USMLE',
          'Estrategia de aplicación a programas de residencia',
          'Preparación para entrevistas',
          'Documentación y certificaciones',
          'Cursos de preparación y orientación'
        ]
      },
      {
        number: 2,
        title: 'Inversión en educación continua',
        description: 'El sistema médico estadounidense exige un compromiso constante con la educación continua. Los médicos extranjeros deben estar preparados para:',
        points: [
          'Mantener sus conocimientos actualizados',
          'Participar en conferencias y seminarios',
          'Obtener certificaciones adicionales',
          'Adaptarse a nuevas tecnologías y protocolos'
        ]
      },
      {
        number: 3,
        title: 'Dominio del idioma inglés',
        description: 'El dominio del inglés médico va más allá de la comunicación básica. Es fundamental para:',
        points: [
          'Comunicación efectiva con pacientes',
          'Participación en equipos médicos',
          'Presentaciones y conferencias',
          'Documentación médica precisa',
          'Comunicación empática y culturalmente apropiada'
        ]
      },
      {
        number: 4,
        title: 'Adaptación al sistema de salud estadounidense',
        description: 'El sistema de salud estadounidense tiene características únicas que requieren adaptación:',
        points: [
          'Principios y protocolos específicos',
          'Estructuras organizacionales diferentes',
          'Sistemas de seguros complejos',
          'Tecnologías de información médica',
          'Regulaciones y compliance'
        ]
      },
      {
        number: 5,
        title: 'Consideraciones personales y familiares',
        description: 'La emigración médica impacta significativamente en la vida personal y familiar:',
        points: [
          'Impacto en la carrera del cónyuge',
          'Educación de los hijos',
          'Bienestar emocional de la familia',
          'Sacrificios personales y familiares',
          'Adaptación a un nuevo entorno social'
        ]
      },
      {
        number: 6,
        title: 'Adaptación cultural y social',
        description: 'La integración cultural es un proceso complejo que incluye:',
        points: [
          'Construcción de nuevas redes profesionales',
          'Comprensión de dinámicas sociales diferentes',
          'Adaptación a nuevas costumbres y tradiciones',
          'Desarrollo de relaciones interpersonales'
        ]
      },
      {
        number: 7,
        title: 'Investigación exhaustiva del mercado laboral',
        description: 'Es crucial investigar a fondo las oportunidades laborales:',
        points: [
          'Tendencias del mercado laboral médico',
          'Requisitos específicos por especialidad',
          'Oportunidades de crecimiento profesional',
          'Competencia y demanda'
        ]
      },
      {
        number: 8,
        title: 'Networking profesional estratégico',
        description: 'El networking es fundamental para el éxito profesional:',
        points: [
          'Construcción de contactos profesionales antes de emigrar',
          'Participación en asociaciones médicas',
          'Mentoría y orientación profesional',
          'Colaboraciones y proyectos conjuntos'
        ]
      },
      {
        number: 9,
        title: 'Preparación psicológica y emocional',
        description: 'La preparación mental es tan importante como la académica:',
        points: [
          'Gestión del estrés y la ansiedad',
          'Manejo de la incertidumbre',
          'Desarrollo de resiliencia',
          'Sistemas de apoyo emocional'
        ]
      }
    ],
    conclusion: [
      'El mercado médico estadounidense es altamente competitivo y selectivo. La excelencia académica, la relevancia clínica, la investigación y la autoevaluación honesta son componentes esenciales para el éxito. El proceso de emigración puede ser emocionalmente agotador y requiere una motivación inicial clara y una perspectiva a largo plazo.',
      'Es importante recordar que cada médico tiene un perfil único, y lo que funciona para uno puede no ser aplicable para otro. La clave está en la preparación integral, la paciencia y la perseverancia.'
    ],
    cta: {
      title: '¿Cómo puedes empezar?',
      points: [
        'Solicita tu paquete de bienvenida ahora y recibe información detallada sobre el proceso de licenciamiento médico en Estados Unidos.',
        'Agenda una asesoría con nuestros expertos para evaluar tu perfil y crear un plan personalizado de acción.'
      ]
    },
    bookPromotion: {
      title: 'Recurso Recomendado',
      description: 'Te recomendamos el libro de Lila Waldero, CEO de Medical License Factory:',
      bookTitle: 'La Guía de Apoyo al Médico Inmigrante: El Camino a la Licencia Médica',
      availability: 'Disponible en Amazon.',
      linkText: 'Reserva tu copia aquí',
      linkUrlAmazon: 'https://www.amazon.com/GU%C3%8DA-APOYO-AL-M%C3%89DICO-INMIGRANTE/dp/B0DYPSNW5W',
      linkUrlMercadolibre: 'https://articulo.mercadolibre.com.mx/MLM-2302446803-guia-de-apoyo-al-medico-inmigrante-el-camino-a-la-licencia-_JM'
    },
    socialSharing: {
      title: 'Comparte este artículo:',
      platforms: [
        { name: 'Facebook', url: '#', class: 'facebook' },
        { name: 'Twitter', url: '#', class: 'twitter' },
        { name: 'LinkedIn', url: '#', class: 'linkedin' },
        { name: 'WhatsApp', url: '#', class: 'whatsapp' }
      ]
    },
    sidebar: {
      services: {
        title: 'Nuestros servicios',
        items: [
          'Licencia médicas',
          'Reclutamiento',
          'Facturación',
          'LabEndoc',
          'Marketing and branding'
        ]
      },
      newsletter: {
        title: 'Sigue las noticias de nuestra comunidad de licenciamiento médico',
        placeholder: 'doctor@micorreo.com',
        buttonText: 'Suscríbete',
        privacyText: 'Al suscribirte, aceptas nuestra política de privacidad y términos de uso.'
      }
    },
    relatedPosts: [
      {
        image: 'assets/mlf/img/posts/001.png',
        imageAlt: 'Dos hombres conversando',
        date: 'Junio 18, 2025',
        title: 'Eres médico, no un caso genérico: Cómo ejercer en Estados Unidos sin caer en desinformación',
        description: 'Descubre cómo personalizar tu estrategia de licenciamiento médico en Estados Unidos...',
        link: '#'
      },
      {
        image: 'assets/mlf/img/posts/002.png',
        imageAlt: 'Médico con paciente',
        date: 'Junio 15, 2025',
        title: 'Padres que sanan y construyen futuro: homenaje a los médicos en Estados Unidos',
        description: 'Un tributo especial a los médicos que combinan su vocación profesional con su rol como padres...',
        link: '#'
      },
      {
        image: 'assets/mlf/img/posts/003.png',
        imageAlt: 'Médicos preocupados',
        date: 'Junio 6, 2025',
        title: 'Licencias médicas en Estados Unidos sin complicaciones',
        description: 'Guía paso a paso para obtener tu licencia médica en Estados Unidos de manera sencilla...',
        link: '#'
      }
    ]
  };

  public banner: any = {};

  public banner_en: any = {
    title: 'Blog',
    image: 'assets/mlf/img/banners/blog.png',
  };

  public banner_es: any = {
    title: 'Blog',
    image: 'assets/mlf/img/banners/blog.png',
  };

  constructor(
    private _translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _blogService: BlogService
  ) {
    console.log('BlogDetailsPageComponent constructor');

    this.currentLang = this._translate.currentLang;
    
    // Obtener slug de la ruta
    this._route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.articleSlug = params['slug'];
      if (this.articleSlug) {
        this.loadArticle();
      }
    });
  }

  ngOnInit(): void {
    console.log('BlogDetailsPageComponent ngOnInit');
    // this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('BlogDetailsPageComponent ngOnDestroy');
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setData(): void {
    console.log('BlogDetailsPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('BlogDetailsPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('BlogDetailsPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('BlogDetailsPageComponent updateData');

    this.setData();

    this.loading = false;
  }

  public loadArticle(): void {
    this.loading = true;
    
    this._blogService.getArticleBySlug(this.articleSlug)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (article) => {
          if (article) {
            this.article = article;
            this.convertArticleToData(article);
            this.loadRelatedArticles();
          } else {
            // Artículo no encontrado, redirigir a 404 o blog list
            this._router.navigate(['/blog']);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading article:', error);
          this.loading = false;
          this._router.navigate(['/blog']);
        }
      });
  }

  private convertArticleToData(article: BlogArticle): void {
    // Convertir el artículo a la estructura de datos esperada
    this.data = {
      title: article.title,
      heroImage: article.featuredImage || 'assets/mlf/img/banners/medical-practices.jpg',
      heroImageAlt: article.title,
      introduction: article.content?.paragraphs.slice(0, 3) || [article.description],
      conclusion: article.content?.paragraphs.slice(-2) || [],
      cta: {
        title: '¿Cómo puedes empezar?',
        points: [
          'Solicita tu paquete de bienvenida ahora y recibe información detallada sobre el proceso de licenciamiento médico en Estados Unidos.',
          'Agenda una asesoría con nuestros expertos para evaluar tu perfil y crear un plan personalizado de acción.'
        ]
      },
      bookPromotion: {
        title: 'Recurso Recomendado',
        description: 'Te recomendamos el libro de Lila Waldero, CEO de Medical License Factory:',
        bookTitle: 'La Guía de Apoyo al Médico Inmigrante: El Camino a la Licencia Médica',
        availabilityAmazon: 'Disponible en Amazon.',
        availabilityMercadolibre: 'Disponible en Mercado Libre.',
        linkText: 'Reserva tu copia aquí',
        linkUrlAmazon: 'https://www.amazon.com/GU%C3%8DA-APOYO-AL-M%C3%89DICO-INMIGRANTE/dp/B0DYPSNW5W',
        linkUrlMercadolibre: 'https://articulo.mercadolibre.com.mx/MLM-2302446803-guia-de-apoyo-al-medico-inmigrante-el-camino-a-la-licencia-_JM'
      },
      socialSharing: {
        title: 'Comparte este artículo:',
        platforms: [
          { name: 'Facebook', url: '#', class: 'facebook' },
          { name: 'Twitter', url: '#', class: 'twitter' },
          { name: 'LinkedIn', url: '#', class: 'linkedin' },
          { name: 'WhatsApp', url: '#', class: 'whatsapp' }
        ]
      },
      sidebar: {
        services: {
          title: 'Nuestros servicios',
          items: [
            'Licencia médicas',
            'Reclutamiento',
            'Facturación',
            'LabEndoc',
            'Marketing and branding'
          ]
        },
        newsletter: {
          title: 'Sigue las noticias de nuestra comunidad de licenciamiento médico',
          placeholder: 'doctor@micorreo.com',
          buttonText: 'Suscríbete',
          privacyText: 'Al suscribirte, aceptas nuestra política de privacidad y términos de uso.'
        }
      },
      relatedPosts: this.relatedArticles.map(related => ({
        image: related.featuredImage || 'assets/mlf/img/posts/default.jpg',
        imageAlt: related.title,
        date: this.formatDate(related.date),
        title: related.title,
        description: related.description,
        link: `/blog/${related.slug}`
      }))
    };
  }

  private loadRelatedArticles(): void {
    this._blogService.getRelatedArticles(this.articleSlug, 3)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (articles) => {
          this.relatedArticles = articles;
          // Actualizar relatedPosts en data si ya existe
          if (this.data) {
            this.data.relatedPosts = articles.map(related => ({
              image: related.featuredImage || 'assets/mlf/img/posts/default.jpg',
              imageAlt: related.title,
              date: this.formatDate(related.date),
              title: related.title,
              description: related.description,
              link: `/blog/${related.slug}`
            }));
          }
        }
      });
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  public goToRelatedArticle(article: any): void {
    this._router.navigate([article.link]);
  }
}
