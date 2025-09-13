import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-services-partial',
  templateUrl: './pop-services-partial.component.html',
  styleUrls: ['./pop-services-partial.component.scss'],
})
export class PopServicesPartialComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('PopServicesPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('PopServicesPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('PopServicesPartialComponent ngOnDestroy');
  }
}
