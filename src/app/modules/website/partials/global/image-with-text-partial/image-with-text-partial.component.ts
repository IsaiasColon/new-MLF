import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-image-with-text-partial',
  templateUrl: './image-with-text-partial.component.html',
  styleUrls: ['./image-with-text-partial.component.scss'],
})
export class ImageWithTextPartialComponent implements OnInit, OnDestroy {
  @Input() data_en: any = {};
  @Input() data_es: any = {};

  public data: any = {};
  public loading: boolean = false;
  public currentLang: string | null = null;

  constructor(private _translate: TranslateService) {
    console.log('ImageWithTextPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('ImageWithTextPartialComponent ngOnInit');
    this.currentLang = this._translate.currentLang;
    this.checkLangChange();
    this.setData();
  }

  ngOnDestroy(): void {
    console.log('ImageWithTextPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('ImageWithTextPartialComponent setData');
    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public cta(action: string): void {
    console.log('ImageWithTextPartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('ImageWithTextPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(() => {
          this.setData();
        }, 100);
      },
      (error: any) => {
        console.log('ImageWithTextPartialComponent onLangChange error', error);
      }
    );
  }
}
