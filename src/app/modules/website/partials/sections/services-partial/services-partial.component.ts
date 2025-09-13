import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-partial',
  templateUrl: './services-partial.component.html',
  styleUrls: ['./services-partial.component.scss'],
})
export class ServicesPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Why we are your best choice`,
    title: `Experience and knowledge to boost your medical practice`,
    text1: `Focus on providing the best healthcare to your patients, while relying on our administrative, financial and commercial healthcare solutions.`,
    cta1: `Request a call`,
    action: `#bot`,
  };

  public data_es: any = {
    subtitle: `Por qué somos tu mejor opción`,
    title: `Experiencia y conocimiento para impulsar tu práctica médica`,
    text1: `Enfócate en brindarle la mejor atención en salud a tus pacientes, mientras te apoyas en nuestras soluciones administrativas, financieras y comerciales en salud`,
    cta1: `Solicitar llamada`,
    action: `#bot`,
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      icon: 'assets/mlf/img/services/i1.png',
      image: 'assets/mlf/img/services/s1.png',
      title: 'Qualified staff',
      shorttext:
        'We have a highly qualified and experienced staff that will be your ally to help you achieve your goals.',
    },
    {
      id: 2,
      icon: 'assets/mlf/img/services/i2.png',
      image: 'assets/mlf/img/services/s2.png',
      title: 'Easy',
      shorttext:
        'No worries. We complete for you all the steps of the process for your license.',
    },
    {
      id: 3,
      icon: 'assets/mlf/img/services/i3.png',
      image: 'assets/mlf/img/services/s3.png',
      title: 'Recognized team',
      shorttext:
        'More than a decade of experience has earned us the recognition of professionals and institutions.',
    },
    {
      id: 4,
      icon: 'assets/mlf/img/services/i4.png',
      image: 'assets/mlf/img/services/s4.png',
      title: 'Innovation and commitment',
      shorttext:
        "We are driven by your success. That's why we are always innovating better solutions.",
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      icon: 'assets/mlf/img/services/i1.png',
      image: 'assets/mlf/img/services/s1.png',
      title: 'Personal Capacitado',
      shorttext:
        'Contamos con un personal altamente calificado y con amplia experiencia que será tu aliado para que logres tus metas',
    },
    {
      id: 2,
      icon: 'assets/mlf/img/services/i2.png',
      image: 'assets/mlf/img/services/s2.png',
      title: 'Facilidad',
      shorttext:
        'Cero preocupaciones. Completamos por ti todos los pasos del proceso para tu licencia',
    },
    {
      id: 3,
      icon: 'assets/mlf/img/services/i3.png',
      image: 'assets/mlf/img/services/s3.png',
      title: 'Equipo Reconocido',
      shorttext:
        'Más de una década de experiencia nos han valido el reconocimiento de profesionales e instituciones',
    },
    {
      id: 4,
      icon: 'assets/mlf/img/services/i4.png',
      image: 'assets/mlf/img/services/s4.png',
      title: 'Innovación y Compromiso',
      shorttext:
        'Nos mueve tu éxito. Por ello nos mantenemos innovando siempre en mejores soluciones',
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('ServicesPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('ServicesPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ServicesPartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('ServicesPartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }

  public setData(): void {
    console.log('ServicesPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ServicesPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('ServicesPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ServicesPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
