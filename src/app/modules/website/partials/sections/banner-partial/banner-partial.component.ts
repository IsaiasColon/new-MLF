import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-banner-partial',
  templateUrl: './banner-partial.component.html',
  styleUrls: ['./banner-partial.component.scss'],
})
export class BannerPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Welcome to Medical License Factory`,
    title: `Comprehensive Solutions for your Medical Practice`,
    slogan: `We promote the professional practice of physicians and clinics around the world`,
    cta1: `Schedule a consultation`,
    cta2: `Watch video`,
    video_url: 'https://www.youtube.com/watch?v=U_y44h-6MZ8',
    img: 'assets/mlf/img/wheel_en.png',
  };

  public data_es: any = {
    subtitle: `Bienvenido a Medical License Factory`,
    title: `Soluciones Integrales para tu Práctica Médica`,
    slogan: `Impulsamos la práctica profesional de médicos y clínicas en todo el mundo`,
    cta1: `Agenda una consulta`,
    cta2: `Ver vídeo`,
    video_url: 'https://www.youtube.com/watch?v=2JZWQxky7lE',
    img: 'assets/mlf/img/wheel_es.png',
  };

  constructor(
    private _helpers: HelpersService,
    private _translate: TranslateService
  ) {
    console.log('BannerPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('BannerPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('BannerPartialComponent ngOnDestroy');
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

  public scrollToElement(element_id: string): void {
    this._helpers.scrollToElement(element_id, -50);
  }
}
