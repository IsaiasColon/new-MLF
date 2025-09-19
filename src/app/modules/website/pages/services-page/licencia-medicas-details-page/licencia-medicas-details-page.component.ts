import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licencia-medicas-details-page',
  templateUrl: './licencia-medicas-details-page.component.html',
  styleUrls: ['./licencia-medicas-details-page.component.scss']
})
export class LicenciaMedicasDetailsPageComponent implements OnInit {

  public banner: any = {};

  public banner_en: any = {
    title: 'Our Services',
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

  agendarAsesoria(): void {
    // Implementar lógica para agendar asesoría
    console.log('Agendando asesoría...');
  }

  solicitarPaquete(): void {
    // Implementar lógica para solicitar paquete
    console.log('Solicitando paquete de bienvenida...');
  }
  
}
