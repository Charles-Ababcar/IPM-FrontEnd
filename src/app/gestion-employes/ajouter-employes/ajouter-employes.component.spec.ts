import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmployesComponent } from './ajouter-employes.component';

describe('AjouterEmployesComponent', () => {
  let component: AjouterEmployesComponent;
  let fixture: ComponentFixture<AjouterEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
