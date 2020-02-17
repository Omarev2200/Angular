import { TestBed } from '@angular/core/testing';

import { AdCarsService } from './ad-cars.service';

describe('CarsService', () => {
  let service: AdCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
