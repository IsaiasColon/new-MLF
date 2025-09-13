import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form-partial',
  templateUrl: './contact-form-partial.component.html',
  styleUrls: ['./contact-form-partial.component.scss'],
})
export class ContactFormPartialComponent implements OnInit, OnDestroy {
  @Input() background_color: string = `#ebf3fc`;
  @Input() padding_bottom: string = `400px`;

  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  @Input() data_en: any = {
    subtitle: `Talk to an expert`,
    title: `Schedule a personalized consultation at no cost`,
    text1: `Share your information in the following form to contact you and expand all the information about our solutions`,
    title1: `Let's talk by WhatsApp`,
    title2: `Write your question`,
    cta1: `MAKE AN APPOINTMENT`,
    fields: {
      name: `Full Name`,
      email: `Email`,
      phone: `Phone`,
      date: `Date`,
      service: `Service`,
      select: `Select`,
      message: `Write your message`,
    },
    services: [
      {
        id: `Licensing and Credentialing`,
        name: `Licensing and Credentialing`,
      },
      {
        id: `Recruiting`,
        name: `Recruiting`,
      },
      {
        id: `Finance`,
        name: `Finance`,
      },
      {
        id: `Coding and Billing`,
        name: `Coding and Billing`,
      },
      {
        id: `Medical Software`,
        name: `Medical Software`,
      },
      {
        id: `Office Expansion`,
        name: `Office Expansion`,
      },
    ],
  };

  @Input() data_es: any = {
    subtitle: `Habla con un experto`,
    title: `Agenda una asesoría personalizada sin costo`,
    text1: `Compártenos tus datos en el siguiente formulario para contactarte y ampliarte toda la información sobre nuestras soluciones`,
    title1: `Hablemos por WhatsApp`,
    title2: `Escribeme tu duda`,
    cta1: `AGENDAR UNA CITA`,
    fields: {
      name: `Nombre y Apellido`,
      email: `Email`,
      phone: `Teléfono`,
      date: `Fecha`,
      service: `Servicio`,
      select: `Seleccione`,
      message: `Escribe tu mensaje`,
    },
    services: [
      {
        id: `Licencias y Credenciales`,
        name: `Licencias y Credenciales`,
      },
      {
        id: `Reclutamiento`,
        name: `Reclutamiento`,
      },
      {
        id: `Finanzas`,
        name: `Finanzas`,
      },
      {
        id: `Codificación y Facturación`,
        name: `Codificación y Facturación`,
      },
      {
        id: `Software Médico`,
        name: `Software Médico`,
      },
      {
        id: `Ampliación de Oficinas`,
        name: `Ampliación de Oficinas`,
      },
    ],
  };

  public minDate: any = null;

  constructor(private _api: ApiService, private _translate: TranslateService) {
    console.log('ContactFormPartialComponent constructor');

    let today = new Date();

    today.setDate(today.getDate() + 1);

    this.minDate = today.toISOString().split('T')[0];

    this.currentLang = this._translate.currentLang;
  }

  ngOnInit(): void {
    console.log('ContactFormPartialComponent ngOnInit');
    this.setData();
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ContactFormPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('ContactFormPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      async (event: LangChangeEvent) => {
        console.log('ContactFormPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        await this.updateData();
      },
      (error: any) => {
        console.log('ContactFormPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ContactFormPartialComponent updateData');

    this.setData();

    this.loading = false;
  }

  public cta(action: string): void {
    console.log('ContactFormPartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }

  // CUSTOM METHODS AND ATTRIBUTES

  public captchaResolved: boolean = false;

  public recaptchaReactive: any = null;

  public body: any = {
    name: null,
    email: null,
    phone_number: null,
    date: null,
    subject: null,
    message: null,
    lang: null,
  };

  public get valid(): boolean {
    return (
      !!this.body.name &&
      !!this.body.email &&
      !!this.body.phone_number &&
      !!this.body.date &&
      !!this.body.subject &&
      !!this.body.message
    );
  }

  public sendMessage(): void {
    console.log('ContactFormPartialComponent sendMessage body', this.body);

    this.loading = true;

    if (!this.valid) {
      let message: string =
        this.currentLang === 'en'
          ? `All fields are required`
          : `Todos los campos son requeridos`;

      Swal.fire({
        title: 'Error',
        html: message,
        icon: `error`,
      });

      this.loading = false;

      return;
    }

    if (!this.captchaResolved) {
      let message: string =
        this.currentLang === 'en'
          ? `You must solve the captcha to continue`
          : `Debe resolver el captcha para continuar`;

      Swal.fire({
        title: 'Error',
        html: message,
        icon: `error`,
      });

      this.loading = false;

      return;
    }

    let url = `cms/forms/contact-requests`;

    this.body.lang = this.currentLang;

    this._api.post(url, this.body, true).subscribe({
      next: (response: any) => {
        console.log(
          'ContactFormPartialComponent sendMessage response',
          response
        );

        this.body = {
          name: null,
          email: null,
          phone_number: null,
          date: null,
          subject: null,
          message: null,
          lang: null,
        };

        let title: string = this.currentLang === 'en' ? `Success` : `Éxito`;

        let message: string =
          this.currentLang === 'en'
            ? `Contact request successful`
            : `Solicitud de contacto realizada correctamente`;

        Swal.fire({
          title: title,
          html: message,
          icon: `success`,
        });

        this.loading = false;
      },
      error: (error: any) => {
        console.log('ContactFormPartialComponent sendMessage error', error);

        let default_message: string =
          this.currentLang === 'en'
            ? `An error has occurred`
            : `Ha ocurrido un error`;

        let message: string =
          error.status === 422 ? error.error.message : default_message;

        Swal.fire({
          title: 'Error',
          html: message,
          icon: `error`,
        });

        this.loading = false;
      },
    });
  }

  public checkCaptcha(captchaResponse: string) {
    console.log('checkCaptcha', {
      captchaResponse: captchaResponse,
      recaptchaReactive: this.recaptchaReactive,
    });

    this.captchaResolved =
      captchaResponse && captchaResponse.length > 0 ? true : false;
  }
}
