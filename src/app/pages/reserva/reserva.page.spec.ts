import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaPage } from './reserva.page';  // Cambié "RecerbaPage" a "ReservaPage"

describe('ReservaPage', () => {  // Cambié "RecerbaPage" a "ReservaPage"
  let component: ReservaPage;  // Cambié "RecerbaPage" a "ReservaPage"
  let fixture: ComponentFixture<ReservaPage>;  // Cambié "RecerbaPage" a "ReservaPage"

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPage);  // Cambié "RecerbaPage" a "ReservaPage"
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
