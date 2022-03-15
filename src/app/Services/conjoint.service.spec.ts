import { TestBed } from '@angular/core/testing';

import { ConjointService } from './conjoint.service';

describe('ConjointService', () => {
  let service: ConjointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
