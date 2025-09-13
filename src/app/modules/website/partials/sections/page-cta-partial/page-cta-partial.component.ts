import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cta-partial',
  templateUrl: './page-cta-partial.component.html',
  styleUrls: ['./page-cta-partial.component.scss'],
})
export class PageCtaPartialComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('PageCtaPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('PageCtaPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('PageCtaPartialComponent ngOnDestroy');
  }
}
