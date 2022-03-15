import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrestatairesComponent } from './ajouter-prestataires.component';

describe('AjouterPrestatairesComponent', () => {
  let component: AjouterPrestatairesComponent;
  let fixture: ComponentFixture<AjouterPrestatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPrestatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
