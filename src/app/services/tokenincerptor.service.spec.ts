import { TestBed } from '@angular/core/testing';

import { TokenincerptorService } from './tokenincerptor.service';

describe('TokenincerptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenincerptorService = TestBed.get(TokenincerptorService);
    expect(service).toBeTruthy();
  });
});
