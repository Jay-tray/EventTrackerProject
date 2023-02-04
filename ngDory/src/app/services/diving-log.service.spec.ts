import { TestBed } from '@angular/core/testing';

import { DivingLogService } from './diving-log.service';

describe('DivingLogService', () => {
  let service: DivingLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivingLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
