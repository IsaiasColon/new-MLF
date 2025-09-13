import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('PagesComponent constructor');
  }

  ngOnInit(): void {
    console.log('PagesComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('PagesComponent ngOnDestroy');
  }
}
