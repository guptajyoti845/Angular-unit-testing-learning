import {TestBed} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

describe('HeroDetailComponent',() => {
  let mockActivatedRoute, mockHeroService, mockLocation;
    beforeEach(() => {
      mockHeroService= jasmine.createSpyObj(['addHero', 'updateHero']);
      mockLocation = jasmine.createSpyObj(['back']);
      mockActivatedRoute = {
        snapshot: {paramMap:{get: () => {return '3'; }}}
      }
      TestBed.configureTestingModule({
        declarations:[HeroDetailComponent],
        providers:[
          {provide: HeroService, useValue: mockHeroService},
          {provide: Location, useValue: mockLocation},
          {provide: ActivatedRoute, useValue: mockActivatedRoute}
        ]
      });

      let fixture = TestBed.createComponent(HeroDetailComponent);
    })


  // it('should render hero name in H2 tag', () => {
  //
  // })
})
