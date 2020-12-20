import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {HeroService} from '../hero.service';
import {HeroComponent} from '../hero/hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';

describe("Heroes Component (Deep Test)", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService = jasmine.createSpyObj(['getHeroes', 'deleteHero', 'addHero']);
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'spiderDude', strength:80},
      {id: 2, name: 'Wonder Woman', strength:90},
      {id: 3, name: 'SuperDude', strength:20}
    ]
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      providers:[
        {
          provide: HeroService, useValue: mockHeroService
        }
      ],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
  });

  it('should render each hero as a HeroComponent', function (){
    fixture.detectChanges();
    const heroComponentDes = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentDes.length).toBe(3);
    expect(heroComponentDes[0].componentInstance.hero.name).toBe('spiderDude');
    expect(heroComponentDes[1].componentInstance.hero.name).toBe('Wonder Woman');
    expect(heroComponentDes[2].componentInstance.hero.name).toBe('SuperDude');
  })
})
