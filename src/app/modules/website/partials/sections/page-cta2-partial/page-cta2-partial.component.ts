import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-cta2-partial',
  templateUrl: './page-cta2-partial.component.html',
  styleUrls: ['./page-cta2-partial.component.scss'],
})
export class PageCta2PartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Medical investments`,
    title: `Promoting innovative projects in the Caribbean region`,
    cta1: `Read more`,
  };

  public data_es: any = {
    subtitle: `Inversiones médicas`,
    title: `Impulsamos proyectos innovadores en la región del Caribe`,
    cta1: `Saber más`,
  };

  constructor(private _translate: TranslateService) {
    console.log('PageCta2PartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('PageCta2PartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('PageCta2PartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('PageCta2PartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('PageCta2PartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('PageCta2PartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('PageCta2PartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
