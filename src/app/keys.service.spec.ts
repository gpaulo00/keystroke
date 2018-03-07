import { TestBed, inject } from '@angular/core/testing';

import { KeyService } from './keys.service';

describe('KeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyService]
    });
  });

  it('should be created', inject([KeyService], (service: KeyService) => {
    expect(service).toBeTruthy();
  }));
});
