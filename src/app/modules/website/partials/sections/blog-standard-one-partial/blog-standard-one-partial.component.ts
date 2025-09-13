import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-standard-one-partial',
  templateUrl: './blog-standard-one-partial.component.html',
  styleUrls: ['./blog-standard-one-partial.component.scss'],
})
export class BlogStandardOnePartialComponent implements OnInit, OnDestroy {
  public currentLang: string | null = null;
  public page: string | null = '1';
  public search_input: string | null = null;
  public search_by: string = 'title';
  public filter_status: string = 'published';
  public data: any = {};
  public items: Array<any> = [];
  public loading: boolean = false;

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _translate: TranslateService
  ) {
    console.log('BlogStandardOnePartialComponent constructor');
    this.currentLang = this._translate.currentLang;
  }

  ngOnInit(): void {
    console.log('BlogStandardOnePartialComponent ngOnInit');

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.page = params.get('page');

      if (!this.page) {
        this.page = '1';
      }

      this.getData();
    });

    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('BlogStandardOnePartialComponent ngOnDestroy');
  }

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('BlogPageComponent onLangChange event', event);

        this.loading = true;

        this.currentLang = event.lang;

        setTimeout(async () => {
          await this.getData();
        }, 100);
      },
      (error: any) => {
        console.log('BlogPageComponent onLangChange error', error);
      }
    );
  }

  public getData(): void {
    this.loading = true;

    let url: string = `cms/posts?paginate=1`;

    url += `&order_by=published_at`;
    url += `&order_direction=desc`;
    url += `&per_page=5`;
    url += `&page=${this.page}`;

    if (!!this.search_input) {
      url += `&search_by=${this.search_by}`;
      url += `&search_input=${this.search_input}`;
    }

    if (!!this.currentLang) {
      url += `&filter_lang=${this.currentLang}`;
    }

    if (!!this.filter_status) {
      url += `&filter_status=${this.filter_status}`;
    }

    this._api.get(url, true).subscribe({
      next: (response: any) => {
        console.log(
          'BlogStandardOnePartialComponent getData response',
          response
        );
        this.data = response.data;
        this.items = !!this.data ? this.data.data : [];
        console.log('BlogStandardOnePartialComponent getData data', this.data);
        console.log(
          'BlogStandardOnePartialComponent getData items',
          this.items
        );
        this.loading = false;
      },
      error: (error: any) => {
        console.log('BlogStandardOnePartialComponent getData error', error);
        this.data = {};
        this.items = [];
        this.loading = false;
      },
    });
  }

  public goToPage(link: any): void {
    if (!link.url) {
      return;
    }

    this.page = link.url.split('=')[1];
    console.log('goToPage page', this.page);
    this._router.navigate(['blog', this.page]);
  }

  public search(input: any): void {
    console.log('ProductsPage search input', input);
    this.search_input = input;

    this.getData();
  }
}
