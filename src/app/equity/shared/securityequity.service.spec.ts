import { TestBed } from '@angular/core/testing';

import { SecurityequityService } from './securityequity.service';

describe('SecurityequityService', () => {
  let service: SecurityequityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityequityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
