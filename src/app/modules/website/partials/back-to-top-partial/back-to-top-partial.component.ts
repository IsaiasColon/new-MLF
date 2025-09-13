import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top-partial',
  templateUrl: './back-to-top-partial.component.html',
  styleUrls: ['./back-to-top-partial.component.scss'],
})
export class BackToTopPartialComponent implements OnInit, OnDestroy {
  public windowScrolled: boolean | undefined;

  constructor() {
    console.log('BackToTopPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('BackToTopPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('BackToTopPartialComponent ngOnDestroy');
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 200
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  public scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
