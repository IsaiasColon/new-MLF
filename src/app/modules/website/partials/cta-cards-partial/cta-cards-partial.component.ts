import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-cards-partial',
  templateUrl: './cta-cards-partial.component.html',
  styleUrls: ['./cta-cards-partial.component.scss'],
})
export class CtaCardsPartialComponent implements OnInit, OnDestroy {
  @Input() data: any = null;

  @Input() cards: Array<any> = [];

  constructor() {
    console.log('CtaCardsPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('CtaCardsPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('CtaCardsPartialComponent ngOnDestroy');
  }
}
