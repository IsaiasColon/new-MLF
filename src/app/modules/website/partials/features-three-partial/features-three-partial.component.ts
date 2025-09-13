import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features-three-partial',
  templateUrl: './features-three-partial.component.html',
  styleUrls: ['./features-three-partial.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('200ms')]),
    ]),
  ],
})
export class FeaturesThreePartialComponent implements OnInit, OnDestroy {
  @Input() data: any = {};
  @Input() services: Array<any> = [];

  public loading: boolean = false;

  constructor(private _translate: TranslateService) {
    console.log('FeaturesThreePartialComponent constructor');
  }

  ngOnInit(): void {
    console.log('FeaturesThreePartialComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('FeaturesThreePartialComponent ngOnDestroy');
  }

  public cardClicked(service: any): void {
    console.log('FeaturesThreePartialComponent cardClicked', {
      service: service,
    });
    if (service.state === 'default') {
      service.state = 'flipped';
    } else {
      service.state = 'default';
    }

    service.overlay = false;
  }

  public mouseEnter(service: any): void {
    service.overlay = true;
  }

  public mouseLeave(service: any): void {
    service.overlay = false;
  }
}
