import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeServicoComponent } from './area-de-servico.component';

describe('AreaDeServicoComponent', () => {
  let component: AreaDeServicoComponent;
  let fixture: ComponentFixture<AreaDeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
