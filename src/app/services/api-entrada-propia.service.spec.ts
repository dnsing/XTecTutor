import { TestBed } from '@angular/core/testing';

import { ApiEntradaPropiaService } from './api-entrada-propia.service';

describe('ApiEntradaPropiaService', () => {
  let service: ApiEntradaPropiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEntradaPropiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
