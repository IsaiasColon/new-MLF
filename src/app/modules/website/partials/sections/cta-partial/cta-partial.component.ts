import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-partial',
  templateUrl: './cta-partial.component.html',
  styleUrls: ['./cta-partial.component.scss'],
})
export class CtaPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: Array<any> = [];

  public data_en: Array<any> = [
    {
      id: 1,
      icon: 'assets/mlf/img/cog.png',
      text: `Optimize your healthcare <br /> company's results`,
      action: '#bot',
    },
    {
      id: 2,
      icon: 'assets/mlf/img/search.png',
      text: `Discover how to improve <br /> your medical practice`,
      action: '#investments',
    },
  ];

  public data_es: Array<any> = [
    {
      id: 1,
      icon: 'assets/mlf/img/cog.png',
      text: 'Optimiza los resultados <br /> de tu empresa de salud',
    },
    {
      id: 2,
      icon: 'assets/mlf/img/search.png',
      text: 'Descubre cómo puedes mejorar <br /> tú práctica médica',
    },
  ];

  constructor(private _translate: TranslateService, private _router: Router) {
    console.log('CtaPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('CtaPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('CtaPartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('CtaPartialComponent cta', action);

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

  public setData(): void {
    console.log('BannerPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('BannerPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('BannerPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('BannerPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
