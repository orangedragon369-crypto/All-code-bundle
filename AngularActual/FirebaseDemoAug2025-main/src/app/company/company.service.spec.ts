import { TestBed } from '@angular/core/testing';

import { CompanyServiceTs } from './company.service.js';

describe('CompanyServiceTs', () => {
  let service: CompanyServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
