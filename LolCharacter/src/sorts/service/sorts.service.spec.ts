import { TestBed } from '@angular/core/testing';

import { SortsService } from './sorts.service';

describe('SortsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortsService = TestBed.get(SortsService);
    expect(service).toBeTruthy();
  });
});
