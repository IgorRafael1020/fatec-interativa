import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCaPiso2Component } from './mapa-ca-piso2.component';

describe('MapaCaPiso2Component', () => {
  let component: MapaCaPiso2Component;
  let fixture: ComponentFixture<MapaCaPiso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaCaPiso2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCaPiso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
