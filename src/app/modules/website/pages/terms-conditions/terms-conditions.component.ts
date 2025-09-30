import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {

  public banner: any = {};

  public banner_en: any = {
    title: '  Terminos y condiciones',
    image: 'assets/mlf/img/banners/about-us.png',
  };

  constructor(private _translate: TranslateService) {
    console.log('AboutUsPageComponent constructor');

    // this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('AboutUsPageComponent ngOnInit');
    // this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('AboutUsPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('AboutUsPageComponent setData');

    this.banner = this.banner_en;

    // this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    // this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;

    // this.cards_data =
    //   this.currentLang === 'en' ? this.cards_data_en : this.cards_data_es;

    // this.cards = this.currentLang === 'en' ? this.cards_en : this.cards_es;
  }


}
