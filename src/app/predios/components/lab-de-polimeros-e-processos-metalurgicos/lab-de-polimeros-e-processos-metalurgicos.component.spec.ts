import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDePolimerosEProcessosMetalurgicosComponent } from './lab-de-polimeros-e-processos-metalurgicos.component';

describe('LabDePolimerosEProcessosMetalurgicosComponent', () => {
  let component: LabDePolimerosEProcessosMetalurgicosComponent;
  let fixture: ComponentFixture<LabDePolimerosEProcessosMetalurgicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDePolimerosEProcessosMetalurgicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDePolimerosEProcessosMetalurgicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
