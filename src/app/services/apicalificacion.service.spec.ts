import { TestBed } from '@angular/core/testing';

import { ApicalificacionService } from './apicalificacion.service';

describe('ApicalificacionService', () => {
  let service: ApicalificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicalificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
