import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-partial',
  templateUrl: './portfolio-partial.component.html',
  styleUrls: ['./portfolio-partial.component.scss'],
})
export class PortfolioPartialComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public currentLang: string | null = null;

  public data: any = {};

  public data_en: any = {
    subtitle: `Effective solutions`,
    title: `Services designed for you to grow and succeed`,
    text1: `Our mission is to provide you with quality administrative and technological solutions for your individual or business practice.`,
    cta1: `All services`,
  };

  public data_es: any = {
    subtitle: `Soluciones efectivas`,
    title: `Servicios pensados para que crezcas y triunfes`,
    text1: `Nuestra misión es brindarte soluciones administrativas y
    tecnológicas de calidad para tu practica individual o empresarial`,
    cta1: `Todos los servicios`,
  };

  public services: Array<any> = [];

  public services_en: Array<any> = [
    {
      id: 1,
      title: 'Healthcare providers',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#496068',
      cta1: `READ MORE`,
      route: ['/services/health-care-providers'],
      shorttext:
        'A Health Care Provider is a professional licensed to provide diagnostic and treatment health care services, including drugs, surgery and medical devices.',
    },
    {
      id: 2,
      title: 'Medical Practice',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#004482',
      color: '#ffffff',
      cta1: `READ MORE`,
      route: ['/services/medical-practices'],
      shorttext:
        'Medical practice shall include any form of organization in which services are provided to patients of the medical practice or of other physicians.',
    },
  ];

  public services_es: Array<any> = [
    {
      id: 1,
      title: 'Proveedores de Salud',
      image: 'assets/mlf/img/portfolio/p1.png',
      icon: 'assets/mlf/img/portfolio/i1.png',
      backgroud_color: '#dde3fc80',
      color: '#496068',
      cta1: `SABER MÁS`,
      route: ['/services/health-care-providers'],
      shorttext:
        'Un proveedor de Salud es un profesional con licencia para brindar servicios de atención médica de diagnóstico y tratamiento, incluidos medicamentos, cirugía y dispositivos médicos.',
    },
    {
      id: 2,
      title: 'Practica Médica',
      image: 'assets/mlf/img/portfolio/p2.png',
      icon: 'assets/mlf/img/portfolio/i2.png',
      backgroud_color: '#004482',
      color: '#ffffff',
      cta1: `SABER MÁS`,
      route: ['/services/medical-practices'],
      shorttext:
        'La práctica médica incluirá cualquier forma de organización en la que se presten servicios a los pacientes de la práctica médica o de otros médicos.',
    },
  ];

  constructor(public _router: Router, private _translate: TranslateService) {
    console.log('PortfolioPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.setData();
  }

  ngOnInit(): void {
    console.log('PortfolioPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('PortfolioPartialComponent ngOnDestroy');
  }

  public setData(): void {
    console.log('PortfolioPartialComponent setData');

    this.data = this.currentLang === 'en' ? this.data_en : this.data_es;

    this.services =
      this.currentLang === 'en' ? this.services_en : this.services_es;
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('PortfolioPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.updateData();
        }, 100);
      },
      (error: any) => {
        console.log('PortfolioPartialComponent onLangChange error', error);
      }
    );
  }

  public async updateData(): Promise<void> {
    console.log('PortfolioPartialComponent updateData');

    this.setData();

    this.loading = false;
  }
}
