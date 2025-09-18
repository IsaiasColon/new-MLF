import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing-and-branding-page',
  templateUrl: './marketing-and-branding-page.component.html',
  styleUrls: ['./marketing-and-branding-page.component.scss']
})
export class MarketingAndBrandingPageComponent {

  public banner: any = {};

  public banner_en: any = {
    title: 'Marketing and branding',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Haz que tu práctica médica destaque con branding y marketing'
  };

  public banner_es: any = {
    title: 'Marketing and branding',
    image: 'assets/mlf/img/banners/services.jpg',
    subtitle: 'Haz que tu práctica médica destaque con branding y marketing'
  };

  constructor() { }

  ngOnInit(): void {
    this.banner = this.banner_es;
  }
  
}
