import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetEmployeComponent } from './carnet-employe.component';

describe('CarnetEmployeComponent', () => {
  let component: CarnetEmployeComponent;
  let fixture: ComponentFixture<CarnetEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
