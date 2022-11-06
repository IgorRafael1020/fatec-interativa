import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeProjetosMecanicosComponent } from './lab-de-projetos-mecanicos.component';

describe('LabDeProjetosMecanicosComponent', () => {
  let component: LabDeProjetosMecanicosComponent;
  let fixture: ComponentFixture<LabDeProjetosMecanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeProjetosMecanicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeProjetosMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
