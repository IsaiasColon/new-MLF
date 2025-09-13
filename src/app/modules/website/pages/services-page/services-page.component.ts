import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public banner: any = {};

  public banner_en: any = {
    title: 'Our Services',
    image: 'assets/mlf/img/banners/services.jpg',
  };

  public banner_es: any = {
    title: 'Nuestros Servicios',
    image: 'assets/mlf/img/banners/services.jpg',
  };

  constructor(private _translate: TranslateService) {
    console.log('ServicesPageComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('ServicesPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('ServicesPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('ServicesPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ServicesPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('ServicesPageComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('ServicesPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
