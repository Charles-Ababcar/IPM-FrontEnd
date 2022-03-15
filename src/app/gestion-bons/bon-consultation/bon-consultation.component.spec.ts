import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonConsultationComponent } from './bon-consultation.component';

describe('BonConsultationComponent', () => {
  let component: BonConsultationComponent;
  let fixture: ComponentFixture<BonConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
