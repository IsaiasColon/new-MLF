import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-counter-partial',
  templateUrl: './counter-partial.component.html',
  styleUrls: ['./counter-partial.component.scss'],
})
export class CounterPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Talk to an expert`,
    cta1: `Schedule a consulting`,
  };

  public data_es: any = {
    subtitle: `Habla con un experto`,
    cta1: `Agendar una asesoría`,
  };

  public counter: Array<any> = [];

  public counter_en: Array<any> = [
    {
      id: 1,
      title: 'Years of experience',
      plus: true,
      value: 10,
    },
    {
      id: 2,
      title: 'Successful cases',
      plus: true,
      value: 7000,
    },
    {
      id: 3,
      title: 'US states ',
      plus: false,
      value: 50,
    },
    {
      id: 4,
      title: 'Service areas',
      plus: false,
      value: 2,
    },
  ];

  public counter_es: Array<any> = [
    {
      id: 1,
      title: 'Años de experiencia',
      plus: true,
      value: 10,
    },
    {
      id: 2,
      title: 'Casos atendidos con éxito',
      plus: true,
      value: 7000,
    },
    {
      id: 3,
      title: 'Estados de EE.UU',
      plus: false,
      value: 50,
    },
    {
      id: 4,
      title: 'Áreas de servicios',
      plus: false,
      value: 2,
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('CounterPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('CounterPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('CounterPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('CounterPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.counter =
      this.currentLang === 'en' ? this.counter_en : this.counter_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('CounterPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('CounterPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('CounterPartialComponent updateData');

    this.setData();

    this.loading = false;
  }

  public cta(action: string): void {
    console.log('CounterPartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }
}
