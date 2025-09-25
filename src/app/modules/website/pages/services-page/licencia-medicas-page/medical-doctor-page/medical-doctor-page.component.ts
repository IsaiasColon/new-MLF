import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-doctor-page',
  templateUrl: './medical-doctor-page.component.html',
  styleUrls: ['./medical-doctor-page.component.scss']
})
export class MedicalDoctorPageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Licencia Medical Doctor by MOBILE Endorsement',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Our Service Areas'
  };

  public banner_es: any = {
    title: 'Licencia Medical Doctor by MOBILE Endorsement',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Nuestras áreas de servicios'
  };

   constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es; // Cambiar según el idioma actual
   }


}
