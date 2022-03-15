import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRemboursementComponent } from './ajout-remboursement.component';

describe('AjoutRemboursementComponent', () => {
  let component: AjoutRemboursementComponent;
  let fixture: ComponentFixture<AjoutRemboursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRemboursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
