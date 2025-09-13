import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-investments-details-page',
  templateUrl: './medical-investments-details-page.component.html',
  styleUrls: ['./medical-investments-details-page.component.scss'],
})
export class MedicalInvestmentsDetailsPageComponent
  implements OnInit, OnDestroy
{
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {};

  public data_es: any = {};

  public banner: any = {};

  public banner_en: any = {
    title: 'Our Projects',
    image: 'assets/mlf/img/banners/medical-investments.jpg',
  };

  public banner_es: any = {
    title: 'Nuestros Proyectos',
    image: 'assets/mlf/img/banners/medical-investments.jpg',
  };

  public slug: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _translate: TranslateService
  ) {
    console.log('MedicalInvestmentsDetailsPageComponent constructor');
    this.route.paramMap.subscribe((paramMap: any) => {
      this.slug = paramMap.params.slug;
    });

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('MedicalInvestmentsDetailsPageComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('MedicalInvestmentsDetailsPageComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('MedicalInvestmentsDetailsPageComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.banner = this.currentLang === 'en' ? this.banner_en : this.banner_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log(
          'MedicalInvestmentsDetailsPageComponent onLangChange event',
          event
        );

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log(
          'MedicalInvestmentsDetailsPageComponent onLangChange error',
          error
        );
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('MedicalInvestmentsDetailsPageComponent updateData');

    this.setData();

    this.loading = false;
  }
}
