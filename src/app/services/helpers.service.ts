import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  public scrollToElement(element_id: string, offset: number = 100): void {
    const element = document.getElementById(element_id);

    console.log('HelpersService scrollToElement', {
      element_id: element_id,
      element: element,
    });

    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
