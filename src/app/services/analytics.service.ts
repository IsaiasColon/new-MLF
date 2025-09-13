import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgxDeviceInfoService } from 'ngx-device-info';
import * as uuid from 'uuid';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private enabled: boolean;

  private deviceInfo: any = null;
  private deviceId: string | null = null;

  constructor(
    private _api: ApiService,
    private _device: NgxDeviceInfoService,
    private _router: Router
  ) {
    this.enabled = true;

    this._device.getDeviceInfo().then((data) => {
      this.deviceInfo = data;
    });
  }

  public trackPageViews(): void {
    this.deviceId = localStorage.getItem('deviceId');

    if (!this.deviceId) {
      this.deviceId = uuid.v4();
      localStorage.setItem('deviceId', this.deviceId);
    }

    if (this.enabled) {
      this._router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            let data: any = {
              deviceId: this.deviceId,
              deviceName: this.deviceInfo.deviceName,
              deviceType: this.deviceInfo.deviceType,
              host: this.deviceInfo.host,
              hostname: this.deviceInfo.hostname,
              href: this.deviceInfo.href,
              isDesktop: this.deviceInfo.isDesktop,
              isMobile: this.deviceInfo.isMobile,
              isTablet: this.deviceInfo.isTablet,
              language: this.deviceInfo.language,
              origin: this.deviceInfo.origin,
              port: this.deviceInfo.port,
              protocol: this.deviceInfo.protocal,
              time: this.deviceInfo.time,
              userAgent: this.deviceInfo.userAgent,
              vendor: this.deviceInfo.vendor,
              referrer: document.referrer,
              hitType: 'pageview',
              page: event.urlAfterRedirects,
            };

            console.log('AnalyticsService storeEvent data', data);

            this._api.post('analytics/events', data, true).subscribe({
              next: (response: any) => {
                console.log('AnalyticsService storeEvent response', response);
              },
              error: (error: any) => {
                console.log('AnalyticsService storeEvent error', error);
              },
            });
          }
        });
    }
  }
}
