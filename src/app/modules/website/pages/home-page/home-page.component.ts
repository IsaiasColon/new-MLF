import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('HomePageComponent constructor');
  }

  ngOnInit(): void {
    console.log('HomePageComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('HomePageComponent ngOnDestroy');
  }
}
