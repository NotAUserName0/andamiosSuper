import { TestBed } from '@angular/core/testing';

import { ApiAndamiosService } from './api-andamios.service';

describe('ApiAndamiosService', () => {
  let service: ApiAndamiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAndamiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
