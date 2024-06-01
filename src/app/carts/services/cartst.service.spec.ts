import { TestBed } from '@angular/core/testing';

import { CartstService } from './cartst.service';

describe('CartstService', () => {
  let service: CartstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
