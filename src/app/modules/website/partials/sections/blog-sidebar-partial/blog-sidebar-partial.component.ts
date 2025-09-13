import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-sidebar-partial',
  templateUrl: './blog-sidebar-partial.component.html',
  styleUrls: ['./blog-sidebar-partial.component.scss'],
})
export class BlogSidebarPartialComponent implements OnInit, OnDestroy {
  public currentLang: string | null = null;

  // pagination
  page: number = 1;
  public blogpost: Array<any> = [
    {
      id: 1,
      title:
        '¿Por qué cerca del 90 % de nuestros clientes obtienen éxito en la solicitud de su licencia médica?',
      format: 'standard',
      postdate: '17 June 2021',
      image: ['assets/mlf/img/posts/001.png'],
      category: [1, 2],
      tags: [1, 2, 3, 4],
      author: [1],
      shorttext:
        'En Medical License Factory tenemos un secreto que nos ha permitido que cerca del 90 % de nuestros clientes obtenga un resultado exitoso en el proceso de solicitud de su licencia médica para ejercer en los Estados Unidos.',
      htmltext:
        "<div class='blog-details__text1'><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem</p></div><div class='blockquote-box'><blockquote><h3>Smashing Podcast Episode With Paul Boag Conversion Optimization Inspired Design Decisions</h3><p>Bailey Dobson</p></blockquote></div><div class='blog-details__text2'><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p></div>",
      reviews: [
        {
          user: [1],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [
            {
              user: [2],
              commentdate: '21 June 2021',
              comment:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam',
            },
          ],
        },
        {
          user: [3],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [],
        },
      ],
    },
    {
      id: 2,
      title:
        '¿Sabes qué licencia te corresponde? Conoce los tipos de licencia médica que puedes obtener en Estados Unidos?',
      format: 'standard',
      postdate: '17 June 2021',
      image: ['assets/mlf/img/posts/002.png'],
      category: [1, 2],
      tags: [1, 2, 3, 4],
      author: [1],
      shorttext:
        'En el camino de obtener tu licencia médica para ejercer en los Estados Unidos, es importante que sepas cuáles son los tipos de licencia a las que puedes optar.',
      htmltext:
        "<div class='blog-details__text1'><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem</p></div><div class='blockquote-box'><blockquote><h3>Smashing Podcast Episode With Paul Boag Conversion Optimization Inspired Design Decisions</h3><p>Bailey Dobson</p></blockquote></div><div class='blog-details__text2'><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p></div>",
      reviews: [
        {
          user: [1],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [
            {
              user: [2],
              commentdate: '21 June 2021',
              comment:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam',
            },
          ],
        },
        {
          user: [3],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [],
        },
      ],
    },
    {
      id: 3,
      title:
        'La OMS identifica los 10 desafíos en la sanidad mundial para 2021',
      format: 'standard',
      postdate: '17 June 2021',
      image: ['assets/mlf/img/posts/003.png'],
      category: [1, 2],
      tags: [1, 2, 3, 4],
      author: [1],
      shorttext:
        'La organización insta a los países de todo el mundo a "actuar con rapidez" para reparar sus sistemas de salud.',
      htmltext:
        "<div class='blog-details__text1'><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem</p></div><div class='blockquote-box'><blockquote><h3>Smashing Podcast Episode With Paul Boag Conversion Optimization Inspired Design Decisions</h3><p>Bailey Dobson</p></blockquote></div><div class='blog-details__text2'><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p></div>",
      reviews: [
        {
          user: [1],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [
            {
              user: [2],
              commentdate: '21 June 2021',
              comment:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam',
            },
          ],
        },
        {
          user: [3],
          commentdate: '20 June 2021',
          comment:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam,',
          replies: [],
        },
      ],
    },
  ];
  public blogdetails: Array<any> = this.blogpost;
  public category: Array<any> = [
    {
      id: 1,
      title: 'Category 1',
    },
    {
      id: 2,
      title: 'Category 2',
    },
    {
      id: 3,
      title: 'Category 3',
    },
    {
      id: 4,
      title: 'Category 4',
    },
    {
      id: 5,
      title: 'Category 5',
    },
    {
      id: 6,
      title: 'Category 6',
    },
  ];
  public blogcategory: Array<any> = this.category;
  public tags: Array<any> = [
    {
      id: 1,
      title: 'Tag 0',
    },
    {
      id: 2,
      title: 'Tag 1',
    },
    {
      id: 3,
      title: 'Tag 2',
    },
    {
      id: 4,
      title: 'Tag 3',
    },
    {
      id: 5,
      title: 'Tag 4',
    },
    {
      id: 6,
      title: 'Tag 5',
    },
    {
      id: 7,
      title: 'Tag 6',
    },
    {
      id: 8,
      title: 'Tag 7',
    },
    {
      id: 9,
      title: 'Tag 8',
    },
    {
      id: 10,
      title: 'Tag 9',
    },
  ];

  public blogtags: Array<any> = this.tags;
  public authors: Array<any> = [
    {
      id: 1,
      name: 'Michael J. Behne',
      post: 'CEO & Founder',
      image: 'assets/template/images/team/team-one-img-1.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img1.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 2,
      name: 'Seymour Pounders',
      post: 'Senior Manager',
      image: 'assets/template/images/team/team-one-img-2.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img2.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 3,
      name: 'Susan F. Burgess',
      post: 'Junior Marketing',
      image: 'assets/template/images/team/team-one-img-3.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img3.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 4,
      name: 'Douglas B. Robinson',
      post: 'Managing Director',
      image: 'assets/template/images/team/team-one-img-4.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img4.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 5,
      name: 'Delmer H. Harrison',
      post: 'Senior Consultant',
      image: 'assets/template/images/team/team-one-img-5.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img1.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 6,
      name: 'Michael R. Spencer',
      post: 'Senior Manager',
      image: 'assets/template/images/team/team-one-img-6.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img2.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 7,
      name: 'Matthew B. Thomas',
      post: 'Junior Marketing',
      image: 'assets/template/images/team/team-one-img-7.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img3.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
    {
      id: 8,
      name: 'Gary R. Anderson',
      post: 'Managing Director',
      image: 'assets/template/images/team/team-one-img-8.jpg',
      shapeimg: 'assets/template/images/team/team-v2-img4.png',
      information:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore verit quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspe aut odit aut fugit sed quia consequuntur',
      social: [
        {
          icon: 'fab fa-facebook',
          title: 'Facebook',
          url: '/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: '/',
        },
        {
          icon: 'fab fa-youtube',
          title: 'Youtube',
          url: '/',
        },
        {
          icon: 'fab fa-behance',
          title: 'Behance',
          url: '/',
        },
      ],
      skills: [
        {
          title: 'Business Strategy',
          value: 78,
        },
        {
          title: 'Career Development',
          value: 96,
        },
      ],
    },
  ];

  public searchQuery: string;

  constructor(
    private _translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    console.log('BlogSidebarPartialComponent constructor');

    this.currentLang = this._translate.currentLang;

    this.searchText = '';
    this.searchQuery = '';
  }

  ngOnInit(): void {
    console.log('BlogSidebarPartialComponent ngOnInit');
    this.checkLangChange();
  }

  ngOnDestroy(): void {
    console.log('BlogSidebarPartialComponent ngOnDestroy');
  }

  // START CUSTOM LOGIC

  @Output() input_event: EventEmitter<any> = new EventEmitter<any>();

  public searchText: string;

  public checkLangChange(): void {
    this._translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        console.log('BlogSidebarPartialComponent onLangChange event', event);

        this.currentLang = event.lang;

        setTimeout(async () => {}, 100);
      },
      (error: any) => {
        console.log('BlogSidebarPartialComponent onLangChange error', error);
      }
    );
  }

  public search(): void {
    console.log(
      'SearchInputWidgetComponent onInputChange searchText',
      this.searchText
    );

    this.input_event.next(this.searchText);
  }

  // END CUSTOM LOGIC

  // category
  public getCategories(items: string | any[]) {
    let elems = this.blogcategory.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  // Tags
  public getTags(items: string | any[]): any {
    let elems = this.blogtags.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    let elems = this.authors.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  }
  public setDemoDate() {
    let today = new Date();
    this.blogpost.slice(0, 3).map(
      (post: { timestamp: number; postdate: string }) => (
        (post.timestamp = today.getTime() - 3 * 24 * 60 * 60 * 1000),
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        (post.postdate = `${today.getDate() - 2} ${this.changeToMonth(
          today.getMonth()
        )}, ${today.getFullYear()}`)
      )
    );
  }
  public getRecentPost() {
    let elems = this.blogpost.filter(
      (post: { timestamp: number | any; postdate: string | number | Date }) => {
        return post.timestamp < new Date(post.postdate);
      }
    );
    return elems;
  }
  // Related post
  public getPostByCategory(items: string | any[]) {
    let elems = this.blogpost.filter(
      (post: { id: string; category: any[] }) => {
        return (
          parseInt(post.id) !== parseInt(this.route.snapshot.params['id']) &&
          post.category.some((r) => items.includes(r))
        );
      }
    );
    return elems;
  }
  // sanitize url
  public sanitnizeAudioURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Post Details
  public setPost(id: any) {
    this.blogdetails = this.blogpost.filter((item: { id: any }) => {
      return item.id == id;
    });
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === '') {
      return;
    } else {
      this.router.navigate(['blog/search', this.searchText]);
    }
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    let socialIcons = [
      {
        title: 'facebook',
        iconClass: 'fab fa-facebook-f',
        link:
          'https://www.facebook.com/sharer/sharer.php?u=' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
      {
        title: 'twitter',
        iconClass: 'fab fa-twitter',
        link:
          'http://twitter.com/intent/tweet?text=' +
          encodeURIComponent(title) +
          '&' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
      {
        title: 'linkedin',
        iconClass: 'fab fa-linkedin-in',
        link:
          'https://www.linkedin.com/shareArticle?mini=true&url=' +
          encodeURIComponent(this.pageUrl) +
          '&title=' +
          encodeURIComponent(title) +
          '',
      },
      {
        title: 'pinterest',
        iconClass: 'fab fa-pinterest-p',
        link:
          'http://pinterest.com/pin/create/button/?url=' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, 'MsgWindow', 'width=600,height=600');
  }
  // Post Navigation
  public postNavigation(items: string | any[], index: number) {
    let output = [],
      id,
      item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button
      output.push(
        "<div class='blog-details__post-single'><div class='blog-details__post-single-img'> <img src='" +
          item.image[0] +
          "' alt='" +
          item.title +
          "' /></div><div class='blog-details__post-single-text'><h4><a href='/blog-details/" +
          item.id +
          "'>" +
          item.title +
          "</a></h4><ul class='meta-info list-unstyled'><li><a href='/blog-details/" +
          item.id +
          "'><i class='fa fa-calendar' aria-hidden='true'></i>" +
          item.postdate +
          '</a></li></ul></div></div>'
      );
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button
      item = items[index + 1];
      id = item.id;
      output.push(
        "<div class='blog-details__post-single'><div class='blog-details__post-single-img'> <img src='" +
          item.image[0] +
          "' alt='" +
          item.title +
          "' /></div><div class='blog-details__post-single-text'><h4><a href='/blog-details/" +
          item.id +
          "'>" +
          item.title +
          "</a></h4><ul class='meta-info list-unstyled'><li><a href='/blog-details/" +
          item.id +
          "'><i class='fa fa-calendar' aria-hidden='true'></i>" +
          item.postdate +
          '</a></li></ul></div></div>'
      );
    }
    return output;
  }
  // Filter
  // Category Filter
  public setCategory(id: any) {
    this.blogcategory = id;
  }
  public getCategory(): any {
    return this.blogcategory;
  }
  public getPostsByCategory(catId: string) {
    return (this.blogpost = this.blogpost.filter(
      (item: { category: number[] }) => {
        return item.category.includes(parseInt(catId));
      }
    ));
  }
  // Tag Filter
  public setTag(id: any) {
    this.blogtags = id;
  }
  public getTag(): any {
    return this.blogtags;
  }
  public getPostsByTags(tagId: string) {
    return (this.blogpost = this.blogpost.filter((item: { tags: number[] }) => {
      return item.tags.includes(parseInt(tagId));
    }));
  }
  // Author Filter
  public setAuthor(id: any) {
    this.authors = id;
  }
  public getAuthorPost(): any {
    return this.authors;
  }
  public getPostsByAuthors(authorId: string) {
    return (this.blogpost = this.blogpost.filter(
      (item: { author: number[] }) => {
        return item.author.includes(parseInt(authorId));
      }
    ));
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return (this.blogpost = this.blogpost.filter((item: { title: string }) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    }));
  }
  // Fetch All filter
  public setPosts() {
    let postsByCategory: any =
        this.getCategory() != undefined
          ? this.getPostsByCategory(this.getCategory())
          : '',
      postsByTags: any =
        this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '',
      postsByAuthor: any =
        this.getAuthorPost() != undefined
          ? this.getPostsByAuthors(this.getAuthorPost())
          : '',
      postsBySearch: any =
        this.getSearch() != undefined
          ? this.getPostsBySearch(this.getSearch())
          : '';

    if (
      (postsByCategory != '' ||
        postsByCategory != undefined ||
        postsByCategory != null) &&
      postsByCategory.length > 0
    ) {
      this.blogpost = postsByCategory;
    } else if (
      (postsByTags != '' || postsByTags != undefined || postsByTags != null) &&
      postsByTags.length > 0
    ) {
      this.blogpost = postsByTags;
    } else if (
      (postsByAuthor != '' ||
        postsByAuthor != undefined ||
        postsByAuthor != null) &&
      postsByAuthor.length > 0
    ) {
      this.blogpost = postsByAuthor;
    } else if (
      (postsBySearch != '' ||
        postsBySearch != undefined ||
        postsBySearch != null) &&
      postsBySearch.length > 0
    ) {
      this.blogpost = postsBySearch;
    }
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params['catId']);
    this.setTag(this.route.snapshot.params['tagId']);
    this.setAuthor(this.route.snapshot.params['authorId']);
    this.setSearch(this.route.snapshot.params['query']);
    this.setPosts();
    this.setPost(this.route.snapshot.params['id']);
  }
}
