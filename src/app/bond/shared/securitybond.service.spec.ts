import { TestBed } from '@angular/core/testing';

import { SecuritybondService } from './securitybond.service';

describe('SecuritybondService', () => {
  let service: SecuritybondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritybondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
