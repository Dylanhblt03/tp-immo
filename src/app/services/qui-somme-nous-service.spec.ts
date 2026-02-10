import { TestBed } from '@angular/core/testing';

import { QuiSommeNousService } from './qui-somme-nous-service';

describe('QuiSommeNousService', () => {
  let service: QuiSommeNousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuiSommeNousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
