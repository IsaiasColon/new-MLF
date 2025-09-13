import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-process-partial',
  templateUrl: './work-process-partial.component.html',
  styleUrls: ['./work-process-partial.component.scss'],
})
export class WorkProcessPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Leaders in licensing`,
    title: `Achieve better performance in your medical practice`,
  };

  public data_es: any = {
    subtitle: `Líderes en licenciamiento`,
    title: `Logra un mejor desempeño en tu práctica médica`,
  };

  public cards: Array<any> = [];

  public cards_en: Array<any> = [
    {
      id: 1,
      title: 'COMMITMENT',
      icon: 'icon-coffee-cup',
      text: 'We are committed to ensuring your professional development, so that you can achieve your dream of a career in your area of practice.',
      extclass: 'top50',
    },
    {
      id: 2,
      title: 'TRANSPARENCY',
      icon: 'icon-advisor',
      text: 'Our clients feel secure in participating in a simple process, with understandable and transparent information at every step.',
      extclass: 'style2',
    },
    {
      id: 3,
      title: 'EFFICIENCY',
      icon: 'icon-dashboard',
      text: 'We have simplified the tedious procedures required for compliance, ensuring fast and reliable results for our clients.',
      extclass: 'top65',
    },
  ];

  public cards_es: Array<any> = [
    {
      id: 1,
      title: 'Take a Coffee Es',
      icon: 'icon-coffee-cup',
      text: 'Sed ut perspca unde omnis natus error voluptem',
      extclass: 'top50',
    },
    {
      id: 2,
      title: 'Consultation Es',
      icon: 'icon-advisor',
      text: 'Sed ut perspca unde omnis natus error voluptem',
      extclass: 'style2',
    },
    {
      id: 3,
      title: 'Data Analysis Es',
      icon: 'icon-dashboard',
      text: 'Sed ut perspca unde omnis natus error voluptem',
      extclass: 'top65',
    },
    {
      id: 4,
      title: 'Get Success Es',
      icon: 'icon-success',
      text: 'Sed ut perspca unde omnis natus error voluptem',
      extclass: 'style2 top20',
    },
  ];

  constructor(private _translate: TranslateService) {
    console.log('WorkProcessPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('WorkProcessPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('WorkProcessPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('WorkProcessPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.cards = this.currentLang === 'en' ? this.cards_en : this.cards_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('WorkProcessPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('WorkProcessPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('WorkProcessPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
