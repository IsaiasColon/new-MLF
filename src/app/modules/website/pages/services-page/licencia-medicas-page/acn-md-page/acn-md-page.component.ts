import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acn-md-page',
  templateUrl: './acn-md-page.component.html',
  styleUrls: ['./acn-md-page.component.scss']
})
export class AcnMdPageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Licencia de ACN MD',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Licencia de ACN MD',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

   constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es; // Cambiar según el idioma actual
   }


}
