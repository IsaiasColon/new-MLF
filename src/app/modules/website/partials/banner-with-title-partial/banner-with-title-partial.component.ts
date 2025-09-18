import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-with-title-partial',
  templateUrl: './banner-with-title-partial.component.html',
  styleUrls: ['./banner-with-title-partial.component.scss'],
})
export class BannerWithTitlePartialComponent implements OnInit, OnDestroy {
  @Input() image: string | null = null;
  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;

  constructor() {
    console.log('BannerWithTitlePartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('BannerWithTitlePartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('BannerWithTitlePartialComponent ngOnDestroy');
  }
}
