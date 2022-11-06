import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeFisicaEEletroeletronicaComponent } from './lab-de-fisica-e-eletroeletronica.component';

describe('LabDeFisicaEEletroeletronicaComponent', () => {
  let component: LabDeFisicaEEletroeletronicaComponent;
  let fixture: ComponentFixture<LabDeFisicaEEletroeletronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeFisicaEEletroeletronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeFisicaEEletroeletronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
