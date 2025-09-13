import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-text-three-partial',
  templateUrl: './about-text-three-partial.component.html',
  styleUrls: ['./about-text-three-partial.component.scss'],
})
export class AboutTextThreePartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Financial Planning`,
    title: `More efficient revenue cycle management`,
    text1: `We help you to make your revenue cycle management more complete and
    accurate. Our services cover as much of the billing process as the
    client requires. As a result, our clients' collection rates are
    among the highest in the country. In addition, most practices spend
    a considerable amount of human capital managing billing, rework and
    associated billing issues. If you are having problems with your
    revenue cycle management, schedule a consultation with us for a
    detailed analysis.`,
    item1: `Credentialization and registration`,
    item2: `Codification`,
    item3: `Claims`,
    item4: `Posting payments`,
    item5: `Advanced analysis and reporting`,
    item6: `Accounts receivable`,
    item7: `Management of underpaid <br />
    and denied claims`,
    item8: `Patient statements, <br />
    charges and consultations`,
    cta1: `Speak with an expert`,
  };

  public data_es: any = {
    subtitle: `Planificación Financiera`,
    title: `Gestión más eficiente del ciclo de ingresos`,
    text1: `Te ayudamos para que tu gestión del ciclo de ingresos sea más completa y precisa. Nuestros servicios cubren tanto del proceso de facturación como el cliente lo requiera. Como resultado, las tasas de cobro de nuestros clientes se encuentran entre las más altas del país. Además, la mayoría de las prácticas gastan una cantidad considerable de capital humano en la gestión de la facturación, los retrabajos y los problemas asociados con la facturación. Si tiene problemas con la gestión de su ciclo de ingresos, programe una consulta con nosotros para un análisis detallado.`,
    item1: `Credencialización e inscripción`,
    item2: `Codificación`,
    item3: `Presentación de reclamaciones`,
    item4: `Contabilización de pagos`,
    item5: `Cuentas por cobrar`,
    item6: `Informes y análisis avanzados`,
    item7: `Gestión de reclamaciones <br />
    mal pagadas y denegadas`,
    item8: `Declaraciones de pacientes, <br />
    cobros y consultas`,
    cta1: `Hablar con un asesor`,
  };

  constructor(private _translate: TranslateService) {
    console.log('AboutTextThreePartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('AboutTextThreePartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('AboutTextThreePartialComponent ngOnDestroy');
  }

  public cta(action: string): void {
    console.log('AboutTextThreePartialComponent cta', action);

    switch (action) {
      case '#bot':
        let url: string = `https://web.whatsapp.com/send?phone=18503393849&text=Hi`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }

  public setData(): void {
    console.log('AboutTextThreePartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('AboutTextThreePartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('AboutTextThreePartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('AboutTextThreePartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
