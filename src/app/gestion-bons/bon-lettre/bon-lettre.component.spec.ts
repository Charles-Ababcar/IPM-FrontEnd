import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLettreComponent } from './bon-lettre.component';

describe('BonLettreComponent', () => {
  let component: BonLettreComponent;
  let fixture: ComponentFixture<BonLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonLettreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
