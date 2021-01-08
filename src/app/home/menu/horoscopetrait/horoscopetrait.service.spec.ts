import { TestBed } from '@angular/core/testing';

import { HoroscopetraitService } from './horoscopetrait.service';

describe('HoroscopetraitService', () => {
  let service: HoroscopetraitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopetraitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
