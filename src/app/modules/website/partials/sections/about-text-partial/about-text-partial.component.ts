import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-text-partial',
  templateUrl: './about-text-partial.component.html',
  styleUrls: ['./about-text-partial.component.scss'],
})
export class AboutTextPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `We are your partner`,
    title: `Achieve success as a healthcare profesional or company`,
    title2: `More than a decade of medical innovation`,
    text2: `We offer you integral solutions to achieve a successful medical practice, to reduce administrative burdens and provide better care to your patients.`,
    title3: `Committed to your success`,
    text3: `We focus on developing strategies that help you grow.`,
    text4: `Lilia Waldero, Founder and CEO`,
    cta1: `More info`,
    action: '#bot',
  };

  public data_es: any = {
    subtitle: `Somos tus aliados`,
    title: `Logra el éxito como profesional o empresa de salud`,
    title2: `Más de una década de innovación médica`,
    text2: `Te ofrecemos soluciones integrales para que logres una práctica médica exitosa, para que reduzcas las cargas administrativas y brindes mejor atención a tus pacientes.`,
    title3: `Comprometidos con tu éxito`,
    text3: `Cada día nos enfocamos en desarrollar estrategias que te ayuden a crecer`,
    text4: `Lilia Waldero, Fundadora y CEO`,
    cta1: `Más información`,
    action: '#bot',
  };

  constructor(private _translate: TranslateService) {
    console.log('AboutTextPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('AboutTextPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('AboutTextPartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('AboutTextPartialComponent cta', action);

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
    console.log('AboutTextPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('AboutTextPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('AboutTextPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('AboutTextPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
