import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeAutomacaoEMateriaisComponent } from './lab-de-automacao-e-materiais.component';

describe('LabDeAutomacaoEMateriaisComponent', () => {
  let component: LabDeAutomacaoEMateriaisComponent;
  let fixture: ComponentFixture<LabDeAutomacaoEMateriaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeAutomacaoEMateriaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeAutomacaoEMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
