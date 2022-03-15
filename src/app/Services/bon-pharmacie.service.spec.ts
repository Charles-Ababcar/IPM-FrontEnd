import { TestBed } from '@angular/core/testing';

import { BonPharmacieService } from './bon-pharmacie.service';

describe('BonPharmacieService', () => {
  let service: BonPharmacieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonPharmacieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
