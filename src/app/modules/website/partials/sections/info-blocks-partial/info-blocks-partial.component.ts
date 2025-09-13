import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-blocks-partial',
  templateUrl: './info-blocks-partial.component.html',
  styleUrls: ['./info-blocks-partial.component.scss'],
})
export class InfoBlocksPartialComponent implements OnInit, OnDestroy {
  public infoblock: Array<any> = [
    {
      id: 1,
      title: 'Let’s Ready to Get<br>Work Together',
      image: 'assets/template/images/resources/info-v1-img1.png',
      btntext: 'Join Now',
      link: '/career',
    },
    {
      id: 2,
      title: 'Request To Call Back<br>We Will Call!',
      image: 'assets/template/images/resources/info-v1-img2.png',
      btntext: 'Get A Quote',
      link: '/contact',
    },
    {
      id: 3,
      title: 'Build A Better Career<br>With Conbiz',
      image: 'assets/template/images/resources/info-v1-img3.png',
      btntext: 'View Jobs',
      link: '/career',
    },
  ];

  constructor() {
    console.log('InfoBlocksPartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('InfoBlocksPartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('InfoBlocksPartialComponent ngOnDestroy');
  }
}
