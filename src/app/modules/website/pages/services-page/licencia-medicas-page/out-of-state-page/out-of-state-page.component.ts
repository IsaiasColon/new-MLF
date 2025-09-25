import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-of-state-page',
  templateUrl: './out-of-state-page.component.html',
  styleUrls: ['./out-of-state-page.component.scss']
})
export class OutOfStatePageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Licencia Out of State Telehealth Provider Registration',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Licencia Out of State Telehealth Provider Registration',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

   constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es; // Cambiar según el idioma actual
   }


}
