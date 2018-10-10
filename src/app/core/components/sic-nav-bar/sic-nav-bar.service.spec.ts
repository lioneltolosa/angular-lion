import { TestBed, inject } from '@angular/core/testing';

import { SicNavBarService } from './sic-nav-bar.service';

describe('SicNavBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SicNavBarService]
    });
  });

  it('should be created', inject([SicNavBarService], (service: SicNavBarService) => {
    expect(service).toBeTruthy();
  }));
});
