import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Breadcrumb, BreadcrumbService } from 'angular-crumbs';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  public loading: boolean = false;

  public animation: string = ngxLoadingAnimationTypes.rectangleBounce;

  constructor(
    private analytics: AnalyticsService,
    private titleService: Title,
    private breadcrumbService: BreadcrumbService,
    public Router: Router,
    private _translate: TranslateService
  ) {
    console.log('AppComponent constructor');

    let hostname: string = window.location.hostname;

    // let lang: string = 'en';
    let lang: string = 'es';

    console.log('AppComponent constructor hostname', hostname);

    if (hostname.includes('medicalicensefactory.com')) {
      lang = 'en';
    } else if (hostname.includes('licenciasmedica.com')) {
      lang = 'es';
    } else {
      // lang = 'en';
      lang = 'es';
    }

    console.log('AppComponent constructor lang', lang);

    this._translate.setDefaultLang(lang);
    this._translate.use(lang);

    Router.events.subscribe((val: any) => {
      if (val instanceof NavigationStart) {
        this.loading = true;
      }

      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    });
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');

    this.analytics.trackPageViews();

    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  ngOnDestroy(): void {
    console.log('AppComponent ngOnDestroy');
  }

  onActivate(_event: any) {
    window.scroll(0, 0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Medical License Factory';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) {
      return title;
    }

    const routeTitle = this.titlesToString(titles);
    return `${title}${routeTitle}`;
  }

  private titlesToString(titles: any[]) {
    return titles.reduce((prev, curr) => {
      return `${prev} || ${curr.displayName}`;
    }, '');
  }
}
