import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDeAulasComponent } from './central-de-aulas.component';

describe('CentralDeAulasComponent', () => {
  let component: CentralDeAulasComponent;
  let fixture: ComponentFixture<CentralDeAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralDeAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralDeAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
