import { Component } from '@angular/core';

@Component({
  selector: 'app-facturacion-page',
  templateUrl: './facturacion-page.component.html',
  styleUrls: ['./facturacion-page.component.scss']
})
export class FacturacionPageComponent {

  public banner: any = {};

  public banner_en: any = {
    title: 'Facturación',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Maximiza los ingresos de su consulta médica con facturación eficiente'
  };

  public banner_es: any = {
    title: 'Facturación',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Maximiza los ingresos de su consulta médica con facturación eficiente'
  };

  constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es;
  }
  
}
