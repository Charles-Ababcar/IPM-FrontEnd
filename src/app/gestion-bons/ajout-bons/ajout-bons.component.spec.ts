import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBonsComponent } from './ajout-bons.component';

describe('AjoutBonsComponent', () => {
  let component: AjoutBonsComponent;
  let fixture: ComponentFixture<AjoutBonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
