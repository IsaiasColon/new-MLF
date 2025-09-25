import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examination-page',
  templateUrl: './examination-page.component.html',
  styleUrls: ['./examination-page.component.scss']
})
export class ExaminationPageComponent  implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Licencia por examinación',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Licencia por examinación',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

   constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es; // Cambiar según el idioma actual
   }


}
