import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeTecnologiaDeInformacaoComponent } from './lab-de-tecnologia-de-informacao.component';

describe('LabDeTecnologiaDeInformacaoComponent', () => {
  let component: LabDeTecnologiaDeInformacaoComponent;
  let fixture: ComponentFixture<LabDeTecnologiaDeInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeTecnologiaDeInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeTecnologiaDeInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
