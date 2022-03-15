import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFacturesComponent } from './ajouter-factures.component';

describe('AjouterFacturesComponent', () => {
  let component: AjouterFacturesComponent;
  let fixture: ComponentFixture<AjouterFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
