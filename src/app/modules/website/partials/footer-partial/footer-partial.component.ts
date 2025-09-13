import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-partial',
  templateUrl: './footer-partial.component.html',
  styleUrls: ['./footer-partial.component.scss'],
})
export class FooterPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    text1: `We offer comprehensive solutions for independent medical practices and medical entrepreneurs`,
    section1: `Menu`,
    section2: `What's new`,
    section3: `Contact`,
    section2_text: `Don't miss what's new in our medical licensing community`,
    about_us: `About us`,
    blog: `Blog`,
    home: `Home`,
    investments: `Investments`,
    services: `Que hay de nuevo`,
    service1: `Licenses and credentials`,
    service2: `Recruitment`,
    service3: `Finance`,
    service4: `Coding and billing`,
    service5: `Medical software`,
    service6: `Office expansion`,
    cta1_title: `Do you need to increase the income of your medical practice? We know how to help you!`,
    cta2_title: `Do you need to quickly and efficiently manage your medical license? find out how`,
    input1_text: `Write your email`,
    button1_text: `Subscribe`,
  };

  public data_es: any = {
    text1: `Ofrecemos soluciones integrales para prácticas médicas independientes y empresarios médicos.`,
    section1: `Menú`,
    section2: `Que hay de nuevo`,
    section3: `Contacto`,
    section2_text: `No te pierdas lo que hay de nuevo en nuestra comunidad de licencias medicas`,
    about_us: `Nosotros`,
    blog: `Blog`,
    home: `Inicio`,
    investments: `Inversiones`,
    services: `Servicios`,
    service1: `Licencias y credenciales`,
    service2: `Reclutamiento`,
    service3: `Finanzas`,
    service4: `Codificación y facturación`,
    service5: `Software médico`,
    service6: `Ampliación de oficinas`,
    cta1_title: `¿Necesitas aumentar los ingresos de tu práctica médica? ¡Sabemos cómo ayudarte!`,
    cta2_title: `¿Necesitas gestionar de forma rápida y eficiente tu licencia médica? Descubre cómo`,
    input1_text: `Escribe tu correo electrónico`,
    button1_text: `Suscribirme`,
  };

  constructor(public _router: Router, private _translate: TranslateService) {
    console.log('FooterPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('FooterPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('FooterPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('FooterPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('FooterPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('FooterPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('FooterPartialComponent updateData');

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

      case '#investments':
        this._router.navigate(['/medical-investments']);
        break;

      default:
        break;
    }
  }
}
