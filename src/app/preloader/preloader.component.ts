import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit, OnDestroy {
  // Loader
  public isLoading: boolean | undefined;

  constructor() {
    console.log('PreloaderComponent constructor');
  }

  ngOnInit(): void {
    console.log('PreloaderComponent ngOnInit');
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    console.log('PreloaderComponent ngOnDestroy');
  }
}
