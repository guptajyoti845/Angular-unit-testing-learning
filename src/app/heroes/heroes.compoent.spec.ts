import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {HeroService} from '../hero.service';
import {Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output} from '@angular/core';
import {of} from 'rxjs';
import {Hero} from '../hero';
import {By} from '@angular/platform-browser';

describe("Heroes Component", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService = jasmine.createSpyObj(['getHeroes', 'deleteHero', 'addHero']);
  let HEROES;

  @Component({
    selector: 'app-hero',
    template: `<div>MockHeroComponent</div>`
  })
  class MockHeroComponent{
    @Input() hero: Hero;
    @Output() delete = new EventEmitter();
  }

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'spiderDude', strength:80},
      {id: 2, name: 'Wonder Woman', strength:90},
      {id: 3, name: 'SuperDude', strength:20}
    ]
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, MockHeroComponent],
      providers:[
        {
          provide: HeroService, useValue: mockHeroService
        }
      ]
    })

    fixture = TestBed.createComponent(HeroesComponent);
  })

  it('should set heroes correctly from the service', function () {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  it('should create one li for each Hero', function (){
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });

})

