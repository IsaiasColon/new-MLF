import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acnpa-page',
  templateUrl: './acnpa-page.component.html',
  styleUrls: ['./acnpa-page.component.scss']
})
export class AcnpaPageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Licencia de ACNPA',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Licencia de ACNPA',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

   constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es; // Cambiar según el idioma actual
   }


}
