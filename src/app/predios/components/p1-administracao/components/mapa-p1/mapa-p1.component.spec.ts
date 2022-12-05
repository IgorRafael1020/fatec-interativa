import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaP11Component } from './mapa-p1.component';

describe('MapaP11Component', () => {
  let component: MapaP11Component;
  let fixture: ComponentFixture<MapaP11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaP11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaP11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
