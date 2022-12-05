import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeMateriaisESistemasBiomedicosComponent } from './lab-de-materiais-e-sistemas-biomedicos.component';

describe('LabDeMateriaisESistemasBiomedicosComponent', () => {
  let component: LabDeMateriaisESistemasBiomedicosComponent;
  let fixture: ComponentFixture<LabDeMateriaisESistemasBiomedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeMateriaisESistemasBiomedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeMateriaisESistemasBiomedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
