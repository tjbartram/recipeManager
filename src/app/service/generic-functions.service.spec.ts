import { TestBed } from '@angular/core/testing';

import { GenericFunctionsService } from './generic-functions.service';

describe('GenericFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericFunctionsService = TestBed.get(GenericFunctionsService);
    expect(service).toBeTruthy();
  });
});
