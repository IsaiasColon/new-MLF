import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-text-two-partial',
  templateUrl: './about-text-two-partial.component.html',
  styleUrls: ['./about-text-two-partial.component.scss'],
})
export class AboutTextTwoPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Effective alliance`,
    title: `We will help you to achieve success`,
    text1: `A high percentage of our clients successfully obtain their medical licenses by working with us. We have been helping healthcare experts integrate into the job market because our multidisciplinary team is committed to seeing you successfully practice in the United States. We work with you every step of the way, from managing the proper licensing to establishing and managing a practice.`,
    text2: `Our work philosophy allows our clients to understand how we work, what laws and regulations apply to your case and what stage of the process your case is in. In addition, we have extensive experience assessing the eligibility criteria of the Medical Boards.`,
    item1: `Methodical workflow`,
    item2: `Compatible strategy`,
    item3: `Transparent process`,
    item4: `We understand the <br />
    criteria of the <br />
    Medical Boards`,
    cta1: `Speak with an expert`,
    cta2: `Watch video`,
    video_url: `https://www.youtube.com/watch?v=U_y44h-6MZ8`,
  };

  public data_es: any = {
    subtitle: `Alianza efectiva`,
    title: `Te acompañamos para que alcances el éxito`,
    text1: `Un alto porcentaje de nuestros clientes obtienen con éxito sus licencias médicas al trabajar con nosotros. Hemos estado ayudando a los expertos en salud a integrarse al mercado laboral porque nuestro equipo multidisciplinario está comprometido a verlo practicar con éxito en los Estados Unidos. Trabajamos junto a usted en cada paso, desde la gestión de la licencia adecuada hasta el establecimiento y administración de una práctica.`,
    text2: `Nuestra filosofía de trabajo permite que nuestros clientes entiendan cómo trabajamos, qué leyes y reglamentos se aplican a su caso y en qué etapa del proceso se encuentra su caso. Además, tenemos amplia experiencia evaluando criterios de elegibilidad de las Juntas Médicas.`,
    item1: `Flujo de trabajo metódico`,
    item2: `Estrategia compatible`,
    item3: `Proceso transparente`,
    item4: `Entendemos los <br />
    criterios de las <br />
    Juntas Médicas`,
    cta1: `Habla con un experto`,
    cta2: `Ver vídeo`,
    video_url: `https://www.youtube.com/watch?v=2JZWQxky7lE`,
  };

  constructor(private _translate: TranslateService) {
    console.log('AboutTextTwoPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('AboutTextTwoPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('AboutTextTwoPartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('AboutTextTwoPartialComponent cta', action);

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
    console.log('AboutTextTwoPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('AboutTextTwoPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('AboutTextTwoPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('AboutTextTwoPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
