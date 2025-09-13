import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-cta3-partial',
  templateUrl: './page-cta3-partial.component.html',
  styleUrls: ['./page-cta3-partial.component.scss'],
})
export class PageCta3PartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Alianza exitosa`,
    title: `Te acompañamos para que alcances el éxito`,
    text: `Un alto porcentaje de nuestros clientes obtienen con éxito sus
    licencias médicas al trabajar con nosotros. Hemos estado ayudando
    a los expertos en salud a integrarse al mercado laboral porque
    nuestro equipo multidisciplinario está comprometido a verlo
    practicar con éxito en los Estados Unidos. Nuestro equipo trabaja
    junto a usted en cada paso, desde ayudarlo en el proceso de
    obtener la licencia adecuada hasta establecer y administrar una
    práctica.`,
    cta1: `Speak with an expert`,
    cta2: `Watch video`,
    video_url: `https://www.youtube.com/watch?v=U_y44h-6MZ8`,
  };

  public data_es: any = {
    subtitle: `Alianza exitosa`,
    title: `Te acompañamos para que alcances el éxito`,
    text: `Un alto porcentaje de nuestros clientes obtienen con éxito sus
    licencias médicas al trabajar con nosotros. Hemos estado ayudando
    a los expertos en salud a integrarse al mercado laboral porque
    nuestro equipo multidisciplinario está comprometido a verlo
    practicar con éxito en los Estados Unidos. Nuestro equipo trabaja
    junto a usted en cada paso, desde ayudarlo en el proceso de
    obtener la licencia adecuada hasta establecer y administrar una
    práctica.`,
    cta1: `Habla con un experto`,
    cta2: `Ver vídeo`,
    video_url: `https://www.youtube.com/watch?v=2JZWQxky7lE`,
  };

  constructor(private _translate: TranslateService) {
    console.log('PageCta3PartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('PageCta3PartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('PageCta3PartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('PageCta3PartialComponent cta', action);

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
    console.log('PageCta3PartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('PageCta3PartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('PageCta3PartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('PageCta3PartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
