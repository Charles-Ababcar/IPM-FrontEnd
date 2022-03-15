import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrestatairesComponent } from './liste-prestataires.component';

describe('ListePrestatairesComponent', () => {
  let component: ListePrestatairesComponent;
  let fixture: ComponentFixture<ListePrestatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePrestatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
