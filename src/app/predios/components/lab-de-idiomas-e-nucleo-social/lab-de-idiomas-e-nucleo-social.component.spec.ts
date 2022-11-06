import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDeIdiomasENucleoSocialComponent } from './lab-de-idiomas-e-nucleo-social.component';

describe('LabDeIdiomasENucleoSocialComponent', () => {
  let component: LabDeIdiomasENucleoSocialComponent;
  let fixture: ComponentFixture<LabDeIdiomasENucleoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDeIdiomasENucleoSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDeIdiomasENucleoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
