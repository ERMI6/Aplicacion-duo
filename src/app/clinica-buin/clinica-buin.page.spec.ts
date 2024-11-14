import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicaBuinPage } from './clinica-buin.page';

describe('ClinicaBuinPage', () => {
  let component: ClinicaBuinPage;
  let fixture: ComponentFixture<ClinicaBuinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicaBuinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
