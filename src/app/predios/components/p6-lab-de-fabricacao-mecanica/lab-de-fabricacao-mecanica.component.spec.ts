import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeFabricacaoMecanicaComponent } from './lab-de-fabricacao-mecanica.component';

describe('LabDeFabricacaoMecanicaComponent', () => {
  let component: LabDeFabricacaoMecanicaComponent;
  let fixture: ComponentFixture<LabDeFabricacaoMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeFabricacaoMecanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeFabricacaoMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
