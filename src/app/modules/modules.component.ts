import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('ModulesComponent constructor');
  }

  ngOnInit(): void {
    console.log('ModulesComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ModulesComponent ngOnDestroy');
  }
}
