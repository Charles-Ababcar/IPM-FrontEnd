import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmployesComponent } from './modifier-employes.component';

describe('ModifierEmployesComponent', () => {
  let component: ModifierEmployesComponent;
  let fixture: ComponentFixture<ModifierEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
