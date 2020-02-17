import { TestBed } from '@angular/core/testing';

import { SingInsingUpGuard } from './sing-insing-up.guard';

describe('SingInsingUpGuard', () => {
  let guard: SingInsingUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingInsingUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
