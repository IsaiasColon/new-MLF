import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-details-partial',
  templateUrl: './blog-details-partial.component.html',
  styleUrls: ['./blog-details-partial.component.scss'],
})
export class BlogDetailsPartialComponent implements OnInit, OnDestroy {
  public slug: string | null = null;
  public uuid: string | null = null;
  public item: any = null;
  public currentLang: string | null = null;
  public loading: boolean = false;
  public filter_status: string = 'published';

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _translate: TranslateService
  ) {
    console.log('BlogDetailsPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('BlogDetailsPartialComponent ngOnInit');

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
      this.uuid = params.get('uuid');

      console.log('BlogDetailsPartialComponent paramMap params', {
        slug: this.slug,
        uuid: this.uuid,
      });

      if (!this.slug && !this.uuid) {
        this._router.navigate(['blog']);
        return;
      }

      this.getData(this.uuid);
    });

    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('BlogDetailsPartialComponent ngOnDestroy');
  }

  ngAfterContentInit(): void {
    console.log('BlogDetailsPartialComponent ngAfterContentInit');
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('BlogDetailsPartialComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.getData();
        }, 100);
      },
      (error: any) => {
        console.log('BlogDetailsPartialComponent onLangChange error', error);
      }
    );
  }

  public getData(uuid: string | null = null): void {
    this.loading = true;

    let url: string = '';

    if (!!uuid) {
      url = `cms/posts/preview/${uuid}`;
    } else {
      url = `cms/posts/${this.slug}?code='9bdfa2d0-906d-4ed4-89ca-b37a3f352989'`;
      if (!!this.currentLang) {
        url += `&filter_lang=${this.currentLang}`;
      }
      if (!!this.filter_status) {
        url += `&filter_status=${this.filter_status}`;
      }
    }

    this._api.get(url, true).subscribe({
      next: (response: any) => {
        console.log('BlogDetailsPartialComponent getData response', response);
        this.item = response.data;

        if (!this.item) {
          this._router.navigate(['blog']);
          return;
        }

        this.loading = false;
      },
      error: (error: any) => {
        console.log('BlogDetailsPartialComponent getData error', error);
        this.item = null;

        if (!this.item) {
          this._router.navigate(['blog']);
          return;
        }

        this.loading = false;
      },
    });
  }
}
