import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners-partial',
  templateUrl: './partners-partial.component.html',
  styleUrls: ['./partners-partial.component.scss'],
})
export class PartnersPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Our customers`,
    title: `Thousands of satisfied customers worldwide`,
  };

  public data_es: any = {
    subtitle: `Nuestros clientes`,
    title: `Miles de clientes satisfechos en todo el mundo`,
  };

  public partners: Array<any> = [
    {
      id: 1,
      image: 'assets/mlf/img/clients/001.png',
    },
    {
      id: 2,
      image: 'assets/mlf/img/clients/002.png',
    },
    {
      id: 3,
      image: 'assets/mlf/img/clients/003.png',
    },
    {
      id: 4,
      image: 'assets/mlf/img/clients/004.png',
    },
    {
      id: 5,
      image: 'assets/mlf/img/clients/005.png',
    },
  ];

  public settings: OwlOptions = {
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    navText: [
      '<span class="icon-right-arrow left"></span>',
      '<span class="icon-right-arrow"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 4,
      },
      1024: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };

  constructor(private _translate: TranslateService) {
    console.log('PartnersPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('PartnersPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('PartnersPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('PartnersPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('PartnersPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('PartnersPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('PartnersPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
