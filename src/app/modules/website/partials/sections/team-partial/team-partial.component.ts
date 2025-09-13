import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team-partial',
  templateUrl: './team-partial.component.html',
  styleUrls: ['./team-partial.component.scss'],
})
export class TeamPartialComponent implements OnInit, OnDestroy {
  @Input() data_en: any = {};
  @Input() data_es: any = {};

  public data: any = {};
  public loading: boolean = false;
  public currentLang: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _translate: TranslateService
  ) {
    console.log('TeamPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('TeamPartialComponent ngOnInit');
    this.currentLang = this._translate.currentLang;
    this.checkLangChange();
    this.setData();
  }

  ngOnDestroy(): void {
    console.log('TeamPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('TeamPartialComponent setData');
    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('TeamPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(() => {
          this.setData();
        }, 100);
      },
      (error: any) => {
        console.log('TeamPartialComponent onLangChange error', error);
      }
    );
  }

  public cta(action: string): void {
    console.log('TeamPartialComponent cta', action);
    window.open(action, '_blank');
  }
}
