import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLunetterieComponent } from './bon-lunetterie.component';

describe('BonLunetterieComponent', () => {
  let component: BonLunetterieComponent;
  let fixture: ComponentFixture<BonLunetterieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonLunetterieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonLunetterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
