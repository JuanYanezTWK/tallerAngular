import { TestBed, inject } from '@angular/core/testing';

import { ServicexService } from './servicex.service';

describe('ServicexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicexService]
    });
  });

  it('should be created', inject([ServicexService], (service: ServicexService) => {
    expect(service).toBeTruthy();
  }));
});
