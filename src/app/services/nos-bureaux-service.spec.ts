import { TestBed } from '@angular/core/testing';

import { NosBureauxService } from './nos-bureaux-service';

describe('NosBureauxService', () => {
  let service: NosBureauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosBureauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
