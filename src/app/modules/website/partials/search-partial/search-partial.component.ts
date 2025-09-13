import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-partial',
  templateUrl: './search-partial.component.html',
  styleUrls: ['./search-partial.component.scss'],
})
export class SearchPartialComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('SearchPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('SearchPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('SearchPartialComponent ngOnDestroy');
  }
}
