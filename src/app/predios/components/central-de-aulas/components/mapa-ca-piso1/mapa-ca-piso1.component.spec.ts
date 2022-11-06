import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCaPiso1Component } from './mapa-ca-piso1.component';

describe('MapaCaPiso1Component', () => {
  let component: MapaCaPiso1Component;
  let fixture: ComponentFixture<MapaCaPiso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaCaPiso1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCaPiso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
