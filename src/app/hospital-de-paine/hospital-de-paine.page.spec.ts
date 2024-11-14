import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalDePainePage } from './hospital-de-paine.page';

describe('HospitalDePainePage', () => {
  let component: HospitalDePainePage;
  let fixture: ComponentFixture<HospitalDePainePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDePainePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
