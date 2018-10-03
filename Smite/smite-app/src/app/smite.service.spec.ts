import { TestBed, inject } from '@angular/core/testing';

import { SmiteService } from './smite.service';

describe('SmiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmiteService]
    });
  });

  it('should be created', inject([SmiteService], (service: SmiteService) => {
    expect(service).toBeTruthy();
  }));
});
