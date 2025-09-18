import { Component } from '@angular/core';

@Component({
  selector: 'app-reclutamiento-page',
  templateUrl: './reclutamiento-page.component.html',
  styleUrls: ['./reclutamiento-page.component.scss']
})
export class ReclutamientoPageComponent {

  public banner: any = {};

  public banner_en: any = {
    title: 'Medical License Factory: Encuentra el talento médico que transforma tu clínica',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Asegura el éxito de tu equipo de salud con nuestro reclutamiento especializado'
  };

  public banner_es: any = {
    title: 'Medical License Factory: Encuentra el talento médico que transforma tu clínica',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Asegura el éxito de tu equipo de salud con nuestro reclutamiento especializado'
  };

  constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es;
  }

}
