import { Component } from '@angular/core';

@Component({
  selector: 'app-licencia-medicas-details-page',
  templateUrl: './licencia-medicas-details-page.component.html',
  styleUrls: ['./licencia-medicas-details-page.component.scss']
})
export class LicenciaMedicasDetailsPageComponent {

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
