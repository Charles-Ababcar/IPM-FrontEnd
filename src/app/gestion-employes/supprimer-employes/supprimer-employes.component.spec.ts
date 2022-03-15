import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEmployesComponent } from './supprimer-employes.component';

describe('SupprimerEmployesComponent', () => {
  let component: SupprimerEmployesComponent;
  let fixture: ComponentFixture<SupprimerEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
