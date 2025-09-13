import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-with-image-partial',
  templateUrl: './content-with-image-partial.component.html',
  styleUrls: ['./content-with-image-partial.component.scss'],
})
export class ContentWithImagePartialComponent implements OnInit, OnDestroy {
  @Input() image: string | null = null;
  @Input() info: string | null = null;
  @Input() title: string | null = null;
  @Input() short_title: string | null = null;

  constructor() {
    console.log('ContentWithImagePartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('ContentWithImagePartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ContentWithImagePartialComponent ngOnDestroy');
  }
}
