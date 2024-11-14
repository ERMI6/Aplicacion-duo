import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalDeSantiagoPage } from './hospital-de-santiago.page';

describe('HospitalDeSantiagoPage', () => {
  let component: HospitalDeSantiagoPage;
  let fixture: ComponentFixture<HospitalDeSantiagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDeSantiagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
