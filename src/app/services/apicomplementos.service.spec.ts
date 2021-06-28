import { TestBed } from '@angular/core/testing';

import { ApicomplementosService } from './apicomplementos.service';

describe('ApicomplementosService', () => {
  let service: ApicomplementosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicomplementosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
