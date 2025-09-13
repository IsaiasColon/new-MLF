import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
})
export class ContactUsPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    box1_title: `<b>Are you ready for us to work together?</b>`,
    box2_title: `<b>Want us to call you? <br /> Tell us when</b>`,
    box3_title: `<b>Looking for help getting a job position?</b>`,
    box1_cta_title: `Talk to an expert <i class="fas fa-angle-double-right"></i>`,
    box2_cta_title: `Schedule your call <i class="fas fa-angle-double-right"></i>`,
    box3_cta_title: `Leave us your info <i class="fas fa-angle-double-right"></i>`,
    box1_cta_action: `#bot`,
    box2_cta_action: `#scroll_contact_form`,
    box3_cta_action: `#scroll_contact_form`,
    box1_info_title: `Locate us`,
    box2_info_title: `Call us`,
    position: '29.1760933,-80.9828323',
    map_src: this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=29.1760933,-80.9828323&t=&z=17&ie=UTF8&iwloc=&output=embed'
    ),
  };

  public data_es: any = {
    box1_title: `<b>¿Estás listo para que trabajemos juntos?</b>`,
    box2_title: `<b>¿Quieres que te llamemos? <br /> Dinos cuándo</b>`,
    box3_title: `<b>¿Buscas ayuda para obtener una posición laboral?</b>`,
    box1_cta_title: `Hablar con un experto <i class="fas fa-angle-double-right"></i>`,
    box2_cta_title: `Agenda tu llamada <i class="fas fa-angle-double-right"></i>`,
    box3_cta_title: `Déjanos tus datos <i class="fas fa-angle-double-right"></i>`,
    box1_cta_action: `#bot`,
    box2_cta_action: `#scroll_contact_form`,
    box3_cta_action: `#scroll_contact_form`,
    box1_info_title: `Ubícanos`,
    box2_info_title: `Llámanos`,
    position: '29.1760933,-80.9828323',
    map_src: this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=29.1760933,-80.9828323&t=&z=17&ie=UTF8&iwloc=&output=embed'
    ),
  };

  public data_en_form: any = {
    subtitle: `Send us a Message`,
    title: `What doubts do you have? Write us to help you`,
    text1: null,
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

  public data_es_form: any = {
    subtitle: `Envíanos un mensaje`,
    title: `¿Qué dudas tienes? Escríbenos para ayudarte`,
    text1: null,
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

  public banner: any = {};

  public banner_en: any = {
    title: 'Contact us',
    image: 'assets/mlf/img/banners/contact-us.png',
  };

  public banner_es: any = {
    title: 'Contáctanos',
    image: 'assets/mlf/img/banners/contact-us.png',
  };

  constructor(
    private _helpers: HelpersService,
    public sanitizer: DomSanitizer,
    private _router: Router,
    private _translate: TranslateService
  ) {
    console.log('ContactUsPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('ContactUsPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ContactUsPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('ContactUsPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ContactUsPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('ContactUsPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ContactUsPageComponent updateData');

    this.setData();

    this.loading = false;
  }

  public cta(action: string): void {
    console.log('FooterPartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;

        window.open(url, '_blank');
        break;

      case '#scroll_contact_form':
        this.scrollToElement('contact_form');
        break;

      default:
        break;
    }
  }

  public scrollToElement(element_id: string): void {
    this._helpers.scrollToElement(element_id, -50);
  }
}
