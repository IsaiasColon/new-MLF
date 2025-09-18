import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licencia-medicas-page',
  templateUrl: './licencia-medicas-page.component.html',
  styleUrls: ['./licencia-medicas-page.component.scss']
})
export class LicenciaMedicasPageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Our Services',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Escoge la licencia que necesitas',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

  constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es;
  }

  
}
